import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HomeComponent,
    RouterLink,
    RouterOutlet,
  ],
  template: `
    <main id="overlay">
      <header class="brand">
        <a [routerLink]="['/']" class="brand-name">
          <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true">
        </a>
        <a class="link" href="#">About</a>
        <a class="link" href="#">Contact</a>
        <a class="link" href="#" id="turnoff">Acessibility</a>
      </header>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
      <footer>
        <p>2024. Studio Urbanna + Komparti. Todos os direitos reservados.</p> 
      </footer>
    </main>
    <script>
      $(function () {
        var lightsOff = false;
        $('#turnoff').on('click', function () {
            lightsOff = !lightsOff;
            $('#overlay').fadeToggle(1000); /* Choose desired delay */
            if (!lightsOff)
                setTimeout((function() {
                    $(this).removeClass('highlight');
                }).bind(this), 1000); /* Same delay */
            else
                $(this).addClass('highlight');
                $(this).removeId('overlay');
        })
      })
    </script>
  `,
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  title = 'homes';
}