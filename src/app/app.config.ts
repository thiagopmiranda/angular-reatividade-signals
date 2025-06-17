import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { HttpHandlerFn, HttpRequest, HttpResponse, provideHttpClient, withInterceptors } from '@angular/common/http';
import { delay, of } from 'rxjs';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideHttpClient(
      withInterceptors([
        (req: HttpRequest<any>, next: HttpHandlerFn) => {
          if (req.url.endsWith('/api/todos')) {
            const mockTodos = [
              { id: 1, title: 'Comprar pão', done: false },
              { id: 2, title: 'Estudar Angular Signals', done: true }
            ];

            const response = new HttpResponse({
              status: 200,
              body: mockTodos
            });

            return of(response).pipe(delay(500));  // Simula um pequeno delay
          }

          // Requisições que não sejam para /api/todos seguem o fluxo normal
          return next(req);
        }
      ])
    )
  ]
};
