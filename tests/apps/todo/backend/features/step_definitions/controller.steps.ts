import request from 'supertest';
import { AfterAll, BeforeAll, Given, Then } from 'cucumber';

import { TodoBackend } from '../../../../../../src/apps/todo/backend/TodoBackend';

let application: TodoBackend;
let _response: request.Test;

BeforeAll(async () => {
  application = new TodoBackend();
  await application.start();
});

AfterAll(async () => {
  await application.stop();
});

Given('I send a GET request to {string}', (route: string) => {
  _response = request(application.httpServer).get(route);
});

Then('the response status code should be {int}', async (status: number) => {
  await _response.expect(status);
});
