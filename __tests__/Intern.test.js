const Intern = require('../lib/Intern');
test('new Intern object', () => {
    const intern = new Intern('Joe', 54, 'jbbalshaw@gmail.com', 'SFSU');    
    expect(intern.school) .toEqual(expect.any(String));
});
test('employee school', () => {
    const intern = new Intern('Joe', 54, 'jbbalshaw@gmail.com', 'SFSU');    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});
test('employee role', () => {
    const intern = new Intern('Joe', 54, 'jbbalshaw@gmail.com', 'SFSU');
    expect(intern.getRole()).toEqual("Intern");
}); 