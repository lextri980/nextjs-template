import CloseIcon from '@mui/icons-material/Close';
import { TProps } from './type';
import { toast as sonnerToast } from 'sonner';

export default function Toaster(props: TProps) {
  // [Props] Destructuring props
  const { message = 'This is a toast' } = props;

  //! [JSX Section]
  return (
    <div className='toaster-container'>
      <div className='message-wrapper'>{message}</div>
      <CloseIcon className='close-icon' onClick={() => sonnerToast.dismiss()} />
    </div>
  );
}
