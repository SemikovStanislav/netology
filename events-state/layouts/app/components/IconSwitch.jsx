import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';

const icons = {
    "view_list": <ViewListIcon/>,
    "view_module": <ViewModuleIcon/>,
}

const IconSwitch = (props) => {
    const { icon, onSwitch } = props;

    return (
        <div className={"icon-switch"}>
            <span onClick={() => {onSwitch(icon)}} style={{ cursor: 'pointer' }}>
                {icons[icon]}
            </span>
        </div>
    );
}

export default IconSwitch