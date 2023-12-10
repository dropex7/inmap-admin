import {useCallback, useState} from 'react';

function useOpen(defaultOpen = false) {
    const [open, setOpen] = useState(defaultOpen);

    const handleOpen = useCallback(() => setOpen(true), []);
    const handleClose = useCallback(() => setOpen(false), []);
    const handleToggle = useCallback(() => setOpen(v => !v), []);

    return {
        onClose: handleClose,
        onOpen: handleOpen,
        onToggle: handleToggle,
        open,
    } as const;
}

export default useOpen;
