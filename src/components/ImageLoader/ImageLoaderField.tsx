/**
 * Created by MIRZOEV A. on 01.06.2023
 */

import type {RcFile, UploadProps} from 'antd/es/upload';
import type {UploadFile} from 'antd/es/upload/interface';
import ImgCrop from 'antd-img-crop';

import {PlusOutlined} from '@ant-design/icons';
import {useMutation} from '@apollo/client';
import {Form} from 'antd';
import {Modal, Upload} from 'antd';
import {memo, useCallback} from 'react';
import {useState} from 'react';
import {useRecoilValue} from 'recoil';

import type {UploadImageMutation} from '@/generated/graphql';

import {placeAtom} from '@/atoms/selectedPlace';
import {UPLOAD_IMAGE} from '@/operations/image/mutation';
import {getBase64} from '@/utils/utils';

interface Props {
    countOfImages: number;
    fieldName: Array<string | number> | string;
    isRequired?: boolean;
    label?: string;
    name?: string;
    isCropped?: boolean;
}

type NewOriginFileObj = UploadFile['originFileObj'] & {url?: string};

export interface ImageType extends Omit<UploadFile, 'originFileObj'> {
    originFileObj: NewOriginFileObj;
}

const {Item, useFormInstance} = Form;

const ImageLoaderField = memo<Props>(
    ({countOfImages, fieldName, isRequired = true, label, name = fieldName, isCropped = false}) => {
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

        const customRequest = useCallback(
            async (options: any) => {
                const {onSuccess, onError, file, onProgress} = options;
                const base64EncodedData = await getBase64(file);
                onProgress({percent: 50});

                const {data: imageResponse, errors} = await uploadImage({
                    variables: {
                        uploadInput: {
                            base64EncodedData,
                            placeUuid,
                        },
                    },
                });

                onProgress({percent: 100});

                if (errors) {
                    onError('not loaded');
                } else {
                    onSuccess('loaded');
                    file.url = imageResponse?.uploadImage.url;
                }
            },
            [placeUuid, uploadImage],
        );

        const handleChange: UploadProps['onChange'] = async ({fileList: newFileList}: any) => {
            setFileList(newFileList);
            form.setFieldValue(fieldName, newFileList);
        };

        const uploadButton = (
            <div>
                <PlusOutlined />
                <div style={{marginTop: 8}}>Upload</div>
            </div>
        );

        return (
            <>
                <Item
                    labelAlign="left"
                    label={label}
                    name={name}
                    rules={[{message: `Изображение не добавлено!`, required: isRequired}]}
                >
                    {isCropped ? (
                        <ImgCrop>
                            <Upload
                                multiple
                                customRequest={customRequest}
                                fileList={fileList}
                                listType="picture-card"
                                maxCount={countOfImages}
                                onChange={handleChange}
                                onPreview={handlePreview}
                            >
                                {loading || fileList?.length >= countOfImages ? null : uploadButton}
                            </Upload>
                        </ImgCrop>
                    ) : (
                        <Upload
                            multiple
                            customRequest={customRequest}
                            fileList={fileList}
                            listType="picture-card"
                            maxCount={countOfImages}
                            onChange={handleChange}
                            onPreview={handlePreview}
                        >
                            {loading || fileList?.length >= countOfImages ? null : uploadButton}
                        </Upload>
                    )}
                </Item>

                <Modal onCancel={handleCancel} onOk={handleCancel} open={previewOpen} title={previewTitle}>
                    <img alt="example" src={previewImage} style={{width: '100%'}} />
                </Modal>
            </>
        );
    },
);

export default ImageLoaderField;
