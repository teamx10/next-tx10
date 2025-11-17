import {Alert, Box, Button, Container, Typography} from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';
import {generateMetadata} from '@/utils/seo';
import Link from 'next/link';
import {ROUTES} from '@/constants/routes';


export const metadata = generateMetadata({
    title: 'Authentication Failed',
    description: 'Authentication failed',
    url: '/sign-in/failed',
    noindex: true,
});

export const dynamic = 'force-dynamic';

export default function AuthFailedPage() {
    return (
        <Container maxWidth="sm">
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '50vh',
                    gap: 3,
                    textAlign: 'center',
                }}
            >
                <ErrorIcon sx={{fontSize: 64, color: 'error.main'}}/>
                <Typography variant="h4">Authentication Failed</Typography>
                <Alert severity="error" sx={{width: '100%'}}>
                    There was a problem with your authentication. Please try again.
                </Alert>
                <Box sx={{display: 'flex', gap: 2, mt: 2}}>
                    <Button component={Link} href={ROUTES.AUTH.SIGN_IN} variant="contained">
                        Try Again
                    </Button>
                    <Button component={Link} href={ROUTES.HOME} variant="outlined">
                        Go Home
                    </Button>
                </Box>
            </Box>
        </Container>
    );
}

