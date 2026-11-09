import { useState } from "react";

// Імпортуємо всі UI елементи з бічної панелі SideBar
import MoneyMapLogo from '../../assets/icons/MoneyMapLogo.svg';
import HomeLogo from '../../assets/icons/home.svg';
import TransactionsLogo from '../../assets/icons/transactions.svg';
import AnalyticsLogo from '../../assets/icons/analytics.svg';
import BudgetLogo from '../../assets/icons/budget.svg';
import SettingsLogo from '../../assets/icons/settings.svg';
import SproutLogo from '../../assets/icons/sprout.svg';

// Імпортування CSS до цього файлу
import "./Sidebar.css";

function Sidebar() {
    // Для зміни актуальної сторінки
    const [activeItem, setActiveItem] = useState("dashboard");

    // Масив об'єктів (елементів) Sidebar
    const menuItem = [
        {
            id: 'dashboard',
            title: 'Головна',
            icon: HomeLogo
        },
        {
            id: 'transactions',
            title: 'Транзакції',
            icon: TransactionsLogo
        },
        {
            id: 'analytics',
            title: 'Аналітика',
            icon: AnalyticsLogo
        },
        {
            id: 'budget',
            title: 'Бюджети',
            icon: BudgetLogo
        },
        {
            id: 'settings',
            title: 'Налаштування',
            icon: SettingsLogo
        }
    ];

    return (
        <aside className="sidebar">
            {/* Logo */}
            <div className="sidebar__logo">
                <img 
                    src={MoneyMapLogo} 
                    alt="MoneyMap"
                    className="sidebar__logo-icon" 
                />
                <span className="sidebar__logo-text">
                    MoneyMap
                </span>
            </div>

            {/* Navigation */}
            <nav className="sidebar__navigation">
                <div className="sidebar__menu">
                    {menuItem.map((item) => (
                        <button 
                            key={item.id} 
                            className={`sidebar__menu-item ${activeItem === item.id ? 'active' : ''}`}
                            onClick={() => setActiveItem(item.id)}
                        >
                            <img src={item.icon} alt="" className="sidebar__menu-icon" />
                            <span>{item.title}</span>
                        </button>
                    ))}
                </div>
            </nav>

            {/* Footer Promo Card */}
            <div className="sidebar__footer">
                <img 
                    src={SproutLogo} 
                    alt="" 
                    className="sidebar__footer-icon" 
                />
                <p className="sidebar__footer-text">
                    Краще фінансове майбутнє починається з контролю сьогодні
                </p>
                <div className="sidebar__footer-line"></div>
            </div>
        </aside>
    );
}

export default Sidebar;