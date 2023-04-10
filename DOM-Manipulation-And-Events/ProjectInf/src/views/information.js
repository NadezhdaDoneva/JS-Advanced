import { html } from '../lib.js';

const informationTemplate = () => html`
<div class="about-section">
  <h1>About Us</h1>
  <p>This is N&N</p>
</div>

<h2 style="text-align:center">Our Team</h2>
<div class="row">
  <div class="column">
    <div class="card">
      <img class="img" src="https://hips.hearstapps.com/hmg-prod/images/copycat-western-bacon-cheeseburger-2-1651789305.jpeg?crop=1.00xw:0.755xh;0,0.166xh&resize=1200:*" alt="Nadezhda" style="width:100%">
      <div class="container">
        <h2>Nadezhda Doneva</h2>
        <p class="title">CEO & Founder</p>
        <p>lorem ipsum ipsum lorem.</p>
        <p>nade@gmail.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
        <img class="img" src="https://www.telegraph.co.uk/content/dam/news/2022/11/08/TELEMMGLPICT000315441371_trans_NvBQzQNjv4BqqGWfd1Xw9GSkW-zBm8V2rD6UkDycMiCgX2cZHssK1WM.jpeg?imwidth=960" alt="Nelly" style="width:100%">
        <div class="container">
          <h2>Nelly Ilieva</h2>
          <p class="title">CEO & Founder</p>
          <p>lorem ipsum ipsum lorem.</p>
        <p>nelly@gmail.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
        <img class="img" src="https://hedgehogharmony.com/wp-content/uploads/2022/05/Human-hands-holding-little-african-hedgehog-pet-outdoors-on-summer-day-ee220523-480x360.jpg.webp" alt="Adolf" style="width:100%">
        <div class="container">
          <h2>Adolf Hedgehog</h2>
          <p class="title">Talisman</p>
          <p>The heart of the company!</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img src="https://t4.ftcdn.net/jpg/05/10/22/95/240_F_510229552_UcDDkF6ggYhqJv4HyBKknvkjIiJTUzF6.jpg" alt="Enrique Iglesias" style="width:100%">
      <div class="container">
        <h2>Enrique Iglesias</h2>
        <p class="title">Avocado picker</p>
        <p>lorem ipsum ipsum lorem.</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
        <img src="https://media.istockphoto.com/id/1387144817/photo/farmer-holding-sack-of-potatoes-on-his-shoulder.jpg?s=612x612&w=0&k=20&c=FLIlqkQJNmsNX2crUPJxtLO2KAL21insto97ue3hAR4=" alt="Ivan Ivanov" style="width:100%">
        <div class="container">
          <h2>Ivan Ivanov</h2>
          <p class="title">Potato picker</p>
          <p>lorem ipsum ipsum lorem.</p>
          <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img src="https://st2.depositphotos.com/2109755/11967/i/950/depositphotos_119673360-stock-photo-an-lod-man-with-a.jpg" alt="Bai Gosho" style="width:100%">
      <div class="container">
        <h2>Bai Gosho</h2>
        <p class="title">Tomato picker</p>
        <p>lorem ipsum ipsum lorem.</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>`;


export function showInformation(ctx) {
    ctx.render(informationTemplate());
}