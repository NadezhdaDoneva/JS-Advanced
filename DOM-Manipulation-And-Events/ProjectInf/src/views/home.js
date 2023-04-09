import { html } from '../lib.js';

const homeTemplate = () => html`
<div id="homeDiv" style>
<img id="slogan" src="https://logos-download.com/wp-content/uploads/2016/06/mySupermarket_logo.png">
<img id="logo-market" src="https://i.pinimg.com/736x/c0/99/3f/c0993f301d2eab98b04bd40ec9644a0c.jpg">
</div>
`;


export function showHome(ctx) {
    ctx.render(homeTemplate());
}