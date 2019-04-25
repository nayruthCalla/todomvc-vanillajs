import { renderUI } from '../../src/view/controller';

describe('View controller', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div id="root"></div>
    `;
  });
  it('renderUI inserta app dentro del elemento #root', () => {
    renderUI();
    const rootElem = document.getElementById('root');
    // Mas info de snapshots en https://jestjs.io/docs/es-ES/snapshot-testing
    expect(rootElem.innerHTML).toMatchSnapshot();
  });
});
