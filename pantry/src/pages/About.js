import '../styles/About.css'
//import '../styles/Cover.css'


const About = () => {
    return (
        <div className = "marginStyle">
        <h3>{'\t'}900 million tons of food worldwide are wasted each year, according to a global survey conducted by the UN Environment Program (<a href="https://www.bbc.com/news/science-environment-56271385">reported by BBC</a>). 
        This is not only wasting valuable resources, but also contributing to environmental issues such as pollution and greenhouse gas emissions. As of 2021, around 830 
        million people around the world struggle with food security and hunger (<a href="https://www.who.int/news/item/06-07-2022-un-report--global-hunger-numbers-rose-to-as-many-as-828-million-in-2021">reported by the UN</a>). Reducing the rate of food waste would help to 
        alleviate this crisis and lessen the impact of food shortages.</h3>
        <div id="banner">
            <div class="inline-block">
                <img className = "cow" src="https://cdn.discordapp.com/attachments/1030912487274598491/1096970853780029640/bd4224bdc0d7361c33324daba0c59b53.png" alt="React Image" />
            </div>

            <div class="inline-block">
            <img className = "cow" src="https://cdn.discordapp.com/attachments/1090470253714214975/1096894003976339659/thumbnail_Screen_Shot_2023-04-15_at_2.27.28_PM.png" alt="React Image" />
            </div>

            <div class="inline-block">
            <img className = "cow" src="https://cdn.discordapp.com/attachments/1090470253714214975/1096894003976339659/thumbnail_Screen_Shot_2023-04-15_at_2.27.28_PM.png" alt="React Image" />
            </div>
        </div>

        <h3>{'\t'}Use Pantry to track both perishable and nonperishable food, and keep track of what is available at any time with a free account. After adding items to different locations such as refrigerators and cabinets with an easy-to-use input interface, each one will appear in your personal 'Pantry'. Your food will be auto-sorted by expiration date, but can be sorted to search for other characteristics as well. </h3>
        <h3> {'\n'}</h3>
        <h3>{'\t'}The food expiration notification system, Pantry's most important feature, will send a reminder 2 days before a certain food is set to expire (based on the date the food was added). This timely reminder will make sure that all food can be used with minimal waste. Pantry will help you to make better use of food within a timely manner, and reduce the amount of waste due to food expiring unexpectedly.</h3>
        </div>
    );
}
 
export default About;

