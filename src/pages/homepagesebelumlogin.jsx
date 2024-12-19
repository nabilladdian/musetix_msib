import * as React from 'react'
import { NavItem } from './NavItem'
import { styles } from './styles'

const NAV_ITEMS = ['Beranda', 'Event', 'Tiket', 'Masuk']

export function Navigation() {
  return (
    <header className="header" role="banner">
      <div className="header-container">
        <div className="search-section">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4f90bc99e623258670b012eaab00185021499389e1ec423f95a48489a406775a?placeholderIfAbsent=true&apiKey=efae651574394713824d8168ec46154f"
            className="logo"
            alt="Company Logo" 
          />
          
          <form className="search-wrapper" role="search">
            <label htmlFor="search" className="visually-hidden">
              Search events, communities and categories
            </label>
            <div className="search-input-container">
              <input
                id="search"
                type="search"
                className="search-text"
                placeholder="cari event, komunitas, dan kategori"
                aria-label="Search events, communities and categories"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/23ea7603-a352-428b-a51d-654455e5a27d?placeholderIfAbsent=true&apiKey=efae651574394713824d8168ec46154f"
                className="search-icon"
                alt=""
              />
            </div>
          </form>
        </div>

        <nav className="nav-links" role="navigation">
          <div role="menu">
            {NAV_ITEMS.map((item) => (
              <NavItem key={item} text={item} />
            ))}
          </div>
        </nav>
      </div>

      <style jsx>{styles}</style>
    </header>
  )
}