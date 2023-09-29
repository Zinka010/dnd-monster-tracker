import renderer from 'react-test-renderer';
import AddMonsterCardButton from './AddMonsterCardButton';

it('assert render correctly', () => {
  const component = renderer.create(
    <AddMonsterCardButton handleClick={() => console.log("click")}/>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
