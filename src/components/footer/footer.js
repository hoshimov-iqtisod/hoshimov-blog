import React from 'react';
import { Link } from 'gatsby';
import './footer.css';
import telegram from '../../images/telegram-brands.svg';
import rss from '../../images/rss-solid.svg';

const Footer = () => (
    <footer className="site-footer">
        <div className="site-info">
            <div className="footer-aside">
                <div className="pk-subscribe-form-wrap">
                    <div className="pk-subscribe-container">
                        <div className="pk-subscribe-data">
                            <p className="pk-subscribe-message">Подписывайся на рассылку и раз в неделю получай лучшие статьи на почту</p>
                            <form className="subscription">
                                <input type="hidden" name="list_id"/>
                                <div className="pk-input-group">
                                    <input type="text" name="email" className="email form-control" placeholder="Ваш e-mail" />
                                    <button className="pk-subscripe-submit">Подписаться</button>
                                </div>
                                <input type="hidden" name="_wp_http_referer" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-content">
                <h5 className="site-title footer-title">Blog</h5>
                <div className="pk-social-links-template-nav">
                <div className="pk-social-links-items">
                    <div className="pk-social-links-item">
                        <a href="https://t.me/" className="pk-social-links-link" target="_blank" rel="noopener noreferrer">
                            <i className="pk-social-links-icon pk-icon pk-icon-telegram">
                                <img src={telegram} alt="Telegram"/>
                            </i>
                            <span className="pk-social-links-count">4K</span>
                        </a>
                    </div>
                    <div className="pk-social-links-item">
                        <a href="https://t.me/" className="pk-social-links-link" target="_blank" rel="noopener noreferrer">
                            <i className="pk-social-links-icon pk-icon pk-icon-rss">
                                <img src={rss} alt="RSS"/>
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