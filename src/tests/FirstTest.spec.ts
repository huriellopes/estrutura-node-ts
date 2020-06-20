test('it should be ok', () => {
  const user = {
    name: 'Huriel',
    age: 23
  }

  user.name = 'teste'

  expect(user.name).toEqual('teste')
})
