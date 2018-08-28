import muze, { DataModel } from 'muze';
import 'muze/dist/muze.css';

const env = muze();
const mountPoint = document.getElementById('chart');

fetch('/data/cars.json')
  .then(res => res.json())
  .then((data) => {
    const schema = [
      {
        name: 'Name',
        type: 'dimension',
      },
      {
        name: 'Maker',
        type: 'dimension',
      },
      {
        name: 'Miles_per_Gallon',
        type: 'measure',
      },

      {
        name: 'Displacement',
        type: 'measure',
      },
      {
        name: 'Horsepower',
        type: 'measure',
      },
      {
        name: 'Weight_in_lbs',
        type: 'measure',
      },
      {
        name: 'Acceleration',
        type: 'measure',
      },
      {
        name: 'Origin',
        type: 'dimension',
      },
      {
        name: 'Cylinders',
        type: 'dimension',
      },
      {
        name: 'Year',
        type: 'dimension',
        subtype: 'temporal',
        format: '%Y-%m-%d',
      },
    ];

    let dm = new DataModel(data, schema);
    dm = dm.groupBy(['Origin'], {
      Acceleration: 'mean',
    });

    const rows = ['Acceleration'];
    const columns = ['Origin'];

    const canvas = env.canvas();
    canvas
      .rows(rows)
      .columns(columns)
      .data(dm)
      .width(600)
      .height(500)
      .mount(mountPoint);
  })
  .catch(console.log.bind(console));
