import React from 'react';
import { Link } from 'gatsby';
import './footer.css';
import telegram from '../../images/telegram-brands.svg';
import fb from '../../images/facebook-brands.svg';
import youtube from '../../images/youtube-brands.svg';

const Footer = () => (
    <footer className="site-footer">
        <div className="site-info">
            <div className="footer-content content-area">
                <h5 className="site-title footer-title">Blog</h5>
                <div className="pk-social-links-template-nav">
                <div className="pk-social-links-items">
                    <div className="pk-social-links-item">
                        <a href="https://t.me/iqtisodchi_kundaligi" className="pk-social-links-link" target="_blank" rel="noopener noreferrer">
                            <i className="pk-social-links-icon pk-icon pk-icon-telegram">
                                <img src={telegram} alt="Telegram"/>
                            </i>
                            <span className="pk-social-links-count">9K</span>
                        </a>
                    </div>
                    <div className="pk-social-links-item">
                        <a href="https://www.youtube.com/channel/UCRsqjw8SVM9oMZPP0anA_kA" className="pk-social-links-link" target="_blank" rel="noopener noreferrer">
                            <i className="pk-social-links-icon pk-icon pk-icon-rss">
                                <img src={youtube} alt="YouTube"/>
                            </i>
                        </a>
                    </div>
                    <div className="pk-social-links-item">
                        <a href="https://t.me/iqtisodchi_kundaligi" className="pk-social-links-link" target="_blank" rel="noopener noreferrer">
                            <i className="pk-social-links-icon pk-icon pk-icon-rss">
                                <img src={fb} alt="Facebook"/>
                            </i>
                        </a>
                    </div>
                </div>
                </div>
                <nav className="navbar-footer">
                    <ul className="navbar-nav">
                        <li className="menu-item">
                            <Link to="/about">Контакты</Link>
                        </li>
                        <li className="menu-item">
                            <Link to="/about">Политика конфиденциальности</Link>
                        </li>
                        <li className="menu-item">
                            <Link to="/about">Правила публикации статей</Link>
                        </li>
                    </ul>  
                </nav>
                <div className="footer-copyright"> © 2014-2020 При использовании материалов сайта обязательным условием является наличие гиперссылки в пределах первого абзаца на страницу расположения исходной статьи.</div>
            </div>
        </div>
    </footer>
);

export default Footer;