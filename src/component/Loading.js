import 'materialize-css';
import { Preloader } from 'react-materialize';

const Loading = () => {
    return (
        <div className="center">
            <Preloader
                active
                color="blue"
                flashing={true}
                size="small"
            />
        </div>
    );
}

export default Loading;