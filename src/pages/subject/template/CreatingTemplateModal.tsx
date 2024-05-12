/**
 * Created by MIRZOEV A. on 10.12.2023
 */

import {Button, Modal} from 'antd';
import {memo, useCallback, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import useOpen from '@/hooks/useOpen.ts';
import TemplateList from '@/pages/subject/template/TemplateList.tsx';
import {useQuery} from '@apollo/client';
import type {TemplateLocalizedModel} from '@/generated/graphql.ts';
import {GET_TEMPLATES} from '@/operations/template/query.ts';
import type {BaseButtonProps} from 'antd/es/button/button';

const CreatingTemplateModal = memo<BaseButtonProps>(({type = 'primary', ...props}) => {
    const [template, setTemplate] = useState<string>();
    const navigate = useNavigate();
    const {open, onOpen, onClose} = useOpen();

    const {data} = useQuery<{
        templates: Array<TemplateLocalizedModel>;
    }>(GET_TEMPLATES);

    const handleCreateObject = useCallback(() => {
        navigate(`/subject/create-subject/${template}`);
    }, [navigate, template]);

    return (
        <>
            <Button onClick={onOpen} size="large" type={type} {...props}>
                Создать объект
            </Button>
            <Modal
                title="Выбор шаблона"
                open={open}
                okText="Выбрать"
                footer={
                    <Button disabled={!template} onClick={handleCreateObject}>
                        Выбрать
                    </Button>
                }
                onCancel={onClose}
            >
                <TemplateList selectedTemplate={template} setTemplate={setTemplate} data={data?.templates ?? []} />
            </Modal>
        </>
    );
});

export default CreatingTemplateModal;
