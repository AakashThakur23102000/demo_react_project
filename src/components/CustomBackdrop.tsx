import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

type Props = {
    open: boolean;
};

export default function CustomBackdrop({ open }: Readonly<Props>) {
    return (
        <Backdrop
            sx={{
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                color: '#fff',
                zIndex: (theme) => {
                    return theme.zIndex.drawer + 1
                },
            }}
            open={open}
        >
            <CircularProgress color="inherit" />
        </Backdrop>
    );
}
