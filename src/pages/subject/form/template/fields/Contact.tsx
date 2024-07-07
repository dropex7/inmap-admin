/**
 * Created by MIRZOEV A. on 07.07.2024
 */

import {memo} from 'react';
import PhonesField from '@/pages/subject/form/template/fields/PhonesField.tsx';
import SocialMediaField from '@/pages/subject/form/template/fields/SocialMediaField.tsx';
import EmailAddress from '@/pages/subject/form/template/fields/EmailAddress.tsx';
import Website from '@/pages/subject/form/template/fields/Website.tsx';
import DescriptionField from '@/pages/subject/form/template/fields/DescriptionField.tsx';

interface ContactProps {}

const Contact = memo<ContactProps>(() => {
    return (
        <>
            <PhonesField />
            <Website />
            <SocialMediaField />
            <EmailAddress />
            <DescriptionField />
        </>
    );
});

export default Contact;
