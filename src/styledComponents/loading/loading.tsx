import { CircularProgress } from '@mui/material';
import { Box } from '@mui/system';

const Loading = () => {
	return (
		<Box
			sx={{
				background: `#1d1d1d`,
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				height: '100vh',
				position: 'fixed',
				width: '100%',
				zIndex: '9999',
			}}
		>
			<CircularProgress />
		</Box>
	);
};
export default Loading;
