import { logout } from '../api/user.js';
import { html, render, page} from '../lib.js';
import { getUserData } from '../util.js';

const nav = document.querySelector('header');

const navTemplate = (hasUser) => html`

<nav>
    <ul>
        <!------Users and Guest-->
        <li><a href="/">Homepage</a></li>
        <li><a href="/catalog">Catalog</a></li>
        <li><a href="/information">Information</a></li>
        ${!hasUser ? html`<li><a href="/login">Login</a></li>
        <li><a href="/register">Register</a></li>`
        : html`<li><a @click=${onLogout} href="javascript:void(0)">Logout</a></li>`}
    </ul>
</nav>`;


export function updateNav() {
    const user = getUserData();

    render(navTemplate(user), nav);
}

export function onLogout() {
    logout();
    updateNav();
    page.redirect('/');
}