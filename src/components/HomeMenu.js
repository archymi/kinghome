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
                <nav className={cx('gnb', 'no-drag')}>
                    <ul className={cx('gnbList')}>
                        <li className={cx('menuList', 'spotLight')}>
                            LED SPOT LIGHT
                            <div className={cx('spotInner', 'Inner01')}>
                                <li>스포트 12 ~ 15W</li>
                                <li>스포트 21 ~ 25W</li>
                                <li>스포트 30 ~ 40W</li>
                                <li>스포트 50W</li>
                            </div>
                        </li>
                        <li className={cx('menuList', 'downLight')}>
                            LED 다운라이트
                            <div className={cx('spotInner', 'Inner02')}>
                                <li>45타공 이하</li>
                                <li>55 ~ 65 타공</li>
                                <li>70 ~ 80 타공</li>
                                <li>50 ~ 70 타공</li>
                                <li>70 ~ 80 타공</li>
                                <li>80 ~ 90 타공</li>
                                <li>90 ~ 100 타공</li>
                                <li>105 ~ 125 타공</li>
                                <li>130 타공이상</li>
                            </div>
                        </li>
                        <li className={cx('menuList', 'halogenLight')}>
                            할로겐 다운라이트
                        </li>
                        <li className={cx('menuList', 'product')}>
                            Product
                        </li>
                        <li className={cx('menuList', 'hotSale')}>
                            HOT SALE
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default HomeMenu;