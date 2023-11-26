/**
 * Created by MIRZOEV A. on 01.06.2023
 */

import { memo } from "react";
import { Form } from "antd";
import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Modal, Upload } from "antd";
import type { RcFile, UploadChangeParam, UploadProps } from "antd/es/upload";
import type { UploadFile } from "antd/es/upload/interface";
import { getBase64 } from "../../utils/utils";
import { useMutation } from "@apollo/client";
import { UploadImageMutation } from "../../generated/graphql";
import { UPLOAD_IMAGE } from "../../operations/image/mutation";
import { useRecoilValue } from "recoil";
import { placeAtom } from "../../atoms/selectedPlace";

interface Props {
  countOfImages: number;
  fieldName: any;
  name?: string;
  label: string;
  setIsImageLoading?: (isLoading: boolean) => void;
  isRequired?: boolean;
}

const { Item, useFormInstance } = Form;

const normFile = (e: UploadChangeParam | Array<UploadFile>) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e.fileList;
};

const ImageLoaderField = memo<Props>(
  ({
    countOfImages,
    fieldName,
    label,
    setIsImageLoading = () => {},
    isRequired = true,
    name = fieldName,
  }) => {
    const form = useFormInstance();
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState("");
    const [previewTitle, setPreviewTitle] = useState("");
    const [fileList, setFileList] = useState<UploadFile[]>(
      form.getFieldValue(fieldName)
    );

    const placeUuid = useRecoilValue(placeAtom);

    const [uploadImage, { error, loading }] =
      useMutation<UploadImageMutation>(UPLOAD_IMAGE);

    const handleCancel = () => setPreviewOpen(false);

    const handlePreview = async (file: UploadFile) => {
      if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj as RcFile);
      }

      setPreviewImage(file.url || (file.preview as string));
      setPreviewOpen(true);
      setPreviewTitle("Загруженное изображение");
    };

    const handleChange: UploadProps["onChange"] = async ({
      file,
      fileList: newFileList,
    }: any) => {
      setIsImageLoading(true);
      if (file.status === "removed") {
        setFileList(newFileList);
      } else {
        const base64EncodedData = await getBase64(file);

        const { data } = await uploadImage({
          variables: {
            uploadInput: {
              base64EncodedData,
              placeUuid,
            },
          },
        });

        const newList = [...newFileList].map((file) => ({
          ...file,
          url: data?.uploadImage.url,
        }));

        setFileList(newList);
        form.setFieldValue(fieldName, newList);
        setIsImageLoading(false);
      }
    };

    const uploadButton = (
      <div>
        <PlusOutlined />
        <div style={{ marginTop: 8 }}>Upload</div>
      </div>
    );

    return (
      <>
        <Item
          label={label}
          name={name}
          rules={[
            { required: isRequired, message: `Изображение не добавлено!` },
          ]}
        >
          <Upload
            listType="picture-card"
            maxCount={countOfImages}
            fileList={fileList}
            onPreview={handlePreview}
            onChange={handleChange}
            beforeUpload={() => false}
          >
            {loading || fileList?.length >= countOfImages ? null : uploadButton}
          </Upload>
        </Item>

        <Modal
          open={previewOpen}
          title={previewTitle}
          onCancel={handleCancel}
          onOk={handleCancel}
        >
          <img alt="example" style={{ width: "100%" }} src={previewImage} />
        </Modal>
      </>
    );
  }
);

export default ImageLoaderField;
