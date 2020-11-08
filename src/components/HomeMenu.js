import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles/HomeMenu.module.css';
import logoImg from '../asset/logo_crimsoned.svg';
import logoText from '../asset/logo_text.svg';

const cx = classNames.bind(styles);

function HomeMenu() {
    return (
        <div className={cx('menu')}>
            <div className={cx('inner')}>
                <button className={cx('logoBtn')}>
                    <img className={cx('logoImg')} src={logoImg} alt='logo' />
                    <img className={cx('logoText')} src={logoText} alt='logo' />
                </button>
                <nav className={cx('gnb')}>
                    <ul className={cx('gnbList')}>
                        <li className={cx('spotLight')}>
                            LED SPOT LIGHT
                        </li>
                        <li className={cx('downLight')}>
                            LED DOWN LIGHT
                        </li>
                        <li className={cx('halogenLight')}>
                            Halogen DOWN LIGHT
                        </li>
                        <li className={cx('product')}>
                            Product
                        </li>
                        <li className={cx('hotSale')}>
                            HOT SALE
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default HomeMenu;