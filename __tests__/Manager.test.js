const Manager = require('../lib/Manager');
test('Manager object', () => {
    const manager = new Manager('Nicole', 90, 'nicole.elisaw@gmail', 4);    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});
test('employee role', () => {
    const manager = new Manager('Nicole', 90, 'nicole.elisaw@gmail.com');
    expect(manager.getRole()).toEqual("Manager");
}); 