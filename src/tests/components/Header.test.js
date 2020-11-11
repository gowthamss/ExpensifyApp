{
    "setupFiles": ["raf/polyfill", "<rootDir>/src/tests/setupTests.js"],
    "snapshotSerializers": ["enzyme-to-json/serializers"]
}
test('should render Header correctly', () => {
    const wrapper = shallow( < Header / > )
    expect(toJSON(wrapper)).toMatchSnapshot()

    // expect(wrapper.find('h1').text()).toBe('Expensify')
    // const renderer = new ReactShallowRenderer()
    // renderer.render( < Header / > )
    // expect(renderer.getRenderOutput()).toMatchSnapshot()
})