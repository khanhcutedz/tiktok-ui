import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ dat , onClick}) {
    return (
        <Button className={cx('menu-item')} leftIcon={dat.icon} to={dat.to} onClick={onClick}>
            {dat.code}
            {dat.title}
        </Button>
    );
}

export default MenuItem;
