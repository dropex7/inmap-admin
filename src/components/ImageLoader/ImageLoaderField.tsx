/**
 * Created by MIRZOEV A. on 01.06.2023
 */

import type {RcFile, UploadProps} from 'antd/es/upload';
import type {UploadFile} from 'antd/es/upload/interface';

import {PlusOutlined} from '@ant-design/icons';
import {useMutation} from '@apollo/client';
import {Form} from 'antd';
import {Modal, Upload} from 'antd';
import {memo} from 'react';
import {useState} from 'react';
import {useRecoilValue} from 'recoil';

import type {UploadImageMutation} from '../../generated/graphql';

import {placeAtom} from '../../atoms/selectedPlace';
import {UPLOAD_IMAGE} from '../../operations/image/mutation';
import {getBase64} from '../../utils/utils';

interface Props {
    countOfImages: number;
    fieldName: Array<string | number> | string;
    isRequired?: boolean;
    label: string;
    name?: string;
    setIsImageLoading?: (isLoading: boolean) => void;
}

const {Item, useFormInstance} = Form;

const ImageLoaderField = memo<Props>(
    ({countOfImages, fieldName, isRequired = true, label, name = fieldName, setIsImageLoading = () => {}}) => {
        const form = useFormInstance();
        const [previewOpen, setPreviewOpen] = useState(false);
        const [previewImage, setPreviewImage] = useState('');
        const [previewTitle, setPreviewTitle] = useState('');
        const [fileList, setFileList] = useState<Array<UploadFile>>(form.getFieldValue(fieldName));

        const placeUuid = useRecoilValue(placeAtom);

        const [uploadImage, {loading}] = useMutation<UploadImageMutation>(UPLOAD_IMAGE);

        const handleCancel = () => setPreviewOpen(false);

        const handlePreview = async (file: UploadFile) => {
            if (!file.url && !file.preview) {
                file.preview = await getBase64(file.originFileObj as RcFile);
            }

            setPreviewImage(file.url || (file.preview as string));
            setPreviewOpen(true);
            setPreviewTitle('Загруженное изображение');
        };

        const handleChange: UploadProps['onChange'] = async ({file, fileList: newFileList}: any) => {
            setIsImageLoading(true);
            if (file.status === 'removed') {
                setFileList(newFileList);
            } else {
                const base64EncodedData = await getBase64(file);

                const {data} = await uploadImage({
                    variables: {
                        uploadInput: {
                            base64EncodedData,
                            placeUuid,
                        },
                    },
                });

                const newList = [
                    ...fileList,
                    {
                        ...file,
                        url: data?.uploadImage.url,
                    },
                ];

                setFileList(newList);
                form.setFieldValue(fieldName, newList);
                setIsImageLoading(false);
            }
        };

        const uploadButton = (
            <div>
                <PlusOutlined />
                <div style={{marginTop: 8}}>Upload</div>
            </div>
        );

        return (
            <>
                <Item label={label} name={name} rules={[{message: `Изображение не добавлено!`, required: isRequired}]}>
                    <Upload
                        beforeUpload={() => false}
                        fileList={fileList}
                        listType="picture-card"
                        maxCount={countOfImages}
                        onChange={handleChange}
                        onPreview={handlePreview}
                    >
                        {loading || fileList?.length >= countOfImages ? null : uploadButton}
                    </Upload>
                </Item>

                <Modal onCancel={handleCancel} onOk={handleCancel} open={previewOpen} title={previewTitle}>
                    <img alt="example" src={previewImage} style={{width: '100%'}} />
                </Modal>
            </>
        );
    },
);

export default ImageLoaderField;
