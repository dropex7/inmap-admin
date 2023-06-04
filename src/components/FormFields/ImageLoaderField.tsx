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

interface Props {
  countOfImages: number;
  fieldName: string;
  label: string;
}

const { Item } = Form;

const normFile = (e: UploadChangeParam | Array<UploadFile>) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e.fileList;
};

export const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

const ImageLoaderField = memo<Props>(({ countOfImages, fieldName, label }) => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const handleCancel = () => setPreviewOpen(false);

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as RcFile);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url!.substring(file.url!.lastIndexOf("/") + 1)
    );
  };

  const handleChange: UploadProps["onChange"] = ({ fileList: newFileList }) => {
    setFileList(newFileList);
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
        name={fieldName}
        valuePropName="fileList"
        getValueFromEvent={normFile}
        rules={[{ required: true, message: `Изображение не добавлено!` }]}
      >
        <Upload
          listType="picture-card"
          maxCount={countOfImages}
          fileList={fileList}
          onPreview={handlePreview}
          onChange={handleChange}
          beforeUpload={() => false}
        >
          {fileList.length >= countOfImages ? null : uploadButton}
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
});

export default ImageLoaderField;
