import {
  EnvironmentProviders,
  LOCALE_ID,
  makeEnvironmentProviders,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { httpInterceptorProvider } from './interceptors';

export function provideCore(): EnvironmentProviders {
  return makeEnvironmentProviders([
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(withInterceptorsFromDi()),
    { provide: LOCALE_ID, useValue: 'fr-FR' },
    ...httpInterceptorProvider,
  ]);
}
