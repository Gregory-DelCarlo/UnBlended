# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
Distillery.destroy_all
Whiskey.destroy_all

users = [
    { 
        username: "user1",
        password: "123456",
        location: "San Francisco"
    },
    { 
        username: "user2",
        password: "123456",
        location: "New York"
    },
    { 
        username: "user3",
        password: "123456",
        location: "Chicago"
    },
    { 
        username: "user4",
        password: "123456",
        location: "Montana"
    },
    { 
        username: "Chad",
        password: "supersecretpassword!",
        location: "Your Moms"
    }
]

User.create(users)


distilleries = [
    {
        name: 'Jim Beam',
        lat: 37.931119592620696,
        long: -85.65243473068283,
        city: 'Clermont',
        state: 'KY',
        description: 'Jim Beam is an American brand of bourbon whiskey produced in Clermont, Kentucky, by Beam Suntory. 
                      It is one of the best-selling brands of bourbon in the world. Since 1795 (interrupted by Prohibition), 
                      seven generations of the Beam family have been involved in whiskey production for the company that produces the brand. 
                      The brand name became "Jim Beam" in 1943 in honor of James B. Beam, who rebuilt the business after Prohibition ended. 
                      Previously produced by the Beam family and later owned by the Fortune Brands holding company, the brand was purchased by 
                      Suntory Holdings in 2014.',
        established: '1795'
    },
    {
        name: 'Woodford Reserve',
        lat: 38.11288059861353,
        long: -84.81265035046515,
        city: 'Versailles',
        state: 'KY',
        description: "Woodford Reserve is a brand of premium small batch Kentucky straight bourbon whiskey produced in Woodford County, Kentucky, 
                      by the Brown-Forman Corporation. It is made from a mixture of copper pot still spirits produced at the company's Woodford Reserve Distillery, 
                      and column still spirits from the Brown Forman Distillery in Shively, Kentucky. Each 45.2% alcohol by volume (90.4 US Proof) bottle bears 
                      a unique batch and bottle number. The brand was introduced in 1996.",
        established: '1838'
    },
    {
        name: 'Buffalo Trace',
        lat: 38.216692547784476,
        long: -84.87089039495592,
        city: 'Frankfort',
        state: 'KY',
        description: 'Buffalo Trace Distillery is a distillery in Frankfort, Kentucky, that is owned by the Sazerac Company. It has historically been known 
                      by several names, including the George T. Stagg Distillery and the Old Fashioned Copper (O.F.C.) Distillery. Its namesake bourbon brand, 
                      Buffalo Trace Kentucky Straight Bourbon whiskey, was introduced in August 1999. The company claims the distillery is the oldest continuously-operating 
                      distillery in the United States. The company says the name "Buffalo Trace" refers to an ancient buffalo crossing on the banks of the Kentucky River in 
                      Franklin County, Kentucky. The Sazerac Company purchased the distillery in 1992',
        established: '1812'
    },
    {
        name: 'High West',
        lat: 40.79935609250685,
        long: -111.44633802482177,
        city: 'Warship',
        state: 'UT',
        description: 'High West Distillery is a manufacturer of distilled spirits located in Park City, Utah, United States. It is the first legally licensed 
                      distillery in Utah since the end of the American Prohibition.',
        established: '2009'
    },
    {
        name: "Jack Daniel's",
        lat: 35.28371227759603,
        long: -86.37023199292251,
        city: 'Lynchburg',
        state: 'TN',
        description: "Jack Daniel's is a brand of Tennessee whiskey and the top-selling American whiskey in the world. It is produced in Lynchburg, Tennessee, 
                      by the Jack Daniel Distillery, which has been owned by the Brown–Forman Corporation since 1956. Jack Daniel's home county of Moore is 
                      a dry county, so the product is not available for purchase at stores or restaurants within the county. Jack Daniel's and Cola 375mL can
                      The product meets the regulatory criteria for classification as a straight bourbon, though the company disavows this classification. 
                      It markets the liquor simply as Tennessee whiskey rather than as Tennessee bourbon.[8][9] As defined in the North American Free Trade Agreement,
                      Tennessee whiskey is classified as a straight bourbon authorized to be produced in the state of Tennessee.[10] Tennessee law (57-2-106) further 
                      requires most producers of Tennessee whiskey to filter the spirit through charcoal made from maple prior to aging, in addition to meeting the above
                      requirements (the 'Lincoln County Process'). Packaged in square bottles, Jack Daniel's 'Black Label' Tennessee whiskey sold 12.5 million cases 
                      in the 2017 fiscal year, which ended on April 30, 2017.[clarification needed][11] Other brand variations, such as Tennessee Honey, Gentleman Jack,
                      and Tennessee Fire, added another 2.9 million cases to sales. Sales of an additional 800,000 equivalent cases in ready-to-drink (RTD) products brought
                      the fiscal year total to more than 16.1 million equivalent adjusted cases for the entire Jack Daniel's family of brands.",
        established: '1866'
    },
    {
        name: 'Breckenridge Distillery',
        lat: 39.51007210285081,
        long: -106.05230605343836,
        city: 'Breckenridge',
        state: 'CO',
        description: "The Breckenridge Distillery is the “World’s Highest Distillery”. Founded in 2008, the Breckenridge Distillery is most widely known for its blended
                      bourbon whiskey, a high-rye mash American-style whiskey. Breckenridge Bourbon is one of the most highly awarded crafted bourbons; 4x winner of Best 
                      American Blended (2016, 17, 18, and 2019) from the World Whiskies Awards and Bourbon of the Year in 2011 at the Int’l Wine & Spirits Competition, 
                      and 2019 Colorado Distillery of the Year at the New York Int’l Spirits Competition. In 2018, Breckenridge Distillery won the coveted Icons of Whisky 
                      for Brand Innovator of the Year.",
        established: '2007'
    },
    {
        name: 'Tuthilltown',
        lat: 41.68631574090359,
        long: -74.17667011932411,
        city: 'Gardiner',
        state: 'NY',
        description: "Over 230 years ago, the story of our distillery began with the construction of the Tuthilltown Gristmill, a testament to New York ingenuity. 
                      Now it plays host to another New Yorker, Ralph Erenzo, who made whiskey in the state for the first time since Prohibition. That bold, pioneering 
                      spirit permeates every part of our craft. Our home is where innovation, collaboration, art, and exploration converge. It's where New York 
                      converges too. Our 36 acres are situated on the outer fringe of the New York metropolitan area, at the foot of the Shawangunk Mountains, 
                      in the heart of the Hudson Valley. We're inspired by all of it, from the bright lights of Broadway to the Hudson Valley's scenic views. 
                      Discover the natural beauty of our home, and join us for a tour, guided tasting, or cocktail workshop to get a taste of the way we do things.",
        established: '2005'
    },
    {
        name: "Maker’s Mark",
        lat: 37.64686467236078,
        long: -85.34896857750851,
        city: 'Loretto',
        state: 'KY',
        description: "Maker's Mark is a small-batch bourbon whiskey produced in Loretto, Kentucky, by Beam Suntory. It is bottled at 90 U.S. proof (45% alcohol by volume) 
                      and sold in squarish bottles sealed with red wax. The distillery offers tours, and is part of the American Whiskey Trail and the Kentucky Bourbon Trail.",
        established: '1954'
    },
    {
        name: "Willett Distilling",
        lat: 37.78474923833905,
        long: -85.46128925470525,
        city: 'Bardstown',
        state: 'KY',
        description: 'Willett Distillery, also known as Kentucky Bourbon Distillers (KBD), Ltd., is a private family-owned and operated company that produces bourbon 
                      and rye whiskey. Over the years the company has bottled whiskeys that range from 2 years of aging maturity up to 28 years. The Distillery is 
                      located on the outskirts of Bardstown, Kentucky, on a site that began as a farm owned by the Willett family. Primarily operating as a relatively 
                      large independent bottling company, KBD has been called "the big daddy of bourbon and rye bottling". The company has remained under family 
                      ownership and operation at the same location since it was created in 1936 as the Willett Distilling Company. The company started doing business 
                      as KBD in the mid-1980s. As of October 2011, the company employed about 14 people – four family members and 8–12 line workers. In 2012, it began 
                      promoting the Willett name again as its primary business name',
        established: "1937"
    },
    {
        name: "Balcones Distilling",
        lat: 31.55037482097859,
        long: -97.13563024237902,
        city: 'Waco',
        state: 'TX',
        description: 'In 2008, Balcones was nothing more than an idea driven by a passion to create something original and authentic, right here in the Heart of Texas. 
                      It all started in an old welding shop under a bridge in Waco. For the next year, we replaced the roofing, knocked out walls, laid brick, cut pipes, installed 
                      copper pot stills from Portugal, and shoehorned a whisky distillery inside that quaint building. Proud of what we had accomplished on our own, we began distilling 
                      in 2009.',
        established: '2008'
    },
    {
        name: 'Castle & Key',
        lat: 38.14716940782217,
        long: -84.83250940423368,
        city: 'Frankfort',
        state: 'KY',
        description: "In 1887, Colonel Edmund Haynes Taylor, Jr built a new kind of distillery destination in Millville, Kentucky. Inspired by European architecture, 
                      the site featured a Castle, a classical Springhouse, and a Sunken Garden. What he built became the birthplace of bourbon tourism.",
        established: '2016'
    },
    {
        name: "Westland Distillery",
        lat: 47.57659879224633,
        long: -122.33442835367923,
        city: 'Seattle',
        state: 'WA',
        description: "Our west may not be the wild untamed frontier of yesteryear, but its challenges are real, its landscape still undeveloped. In whiskey there is 
                      still much to build and we stand now in our place of shared history to pursue our own audacious endeavor. And so we head out, with ambition and 
                      resolve, to build our future and to shape our West.",
        established: "2010"
    },
    {
        name: "Wild Turkey",
        lat: 38.04355283030067,
        long: -84.85305404602349,
        city: 'Lawrenceburg',
        state: 'KY',
        description: "Wild Turkey is a brand of Kentucky straight bourbon whiskey distilled and bottled by the Wild Turkey Distilling Co, a division of Campari Group. 
                      The distillery is located near Lawrenceburg, Kentucky. It offers tours and is part of the American Whiskey Trail and the Kentucky Bourbon Trail.",
        established: '1940'
    },
    {
        name: "Four Roses Distilling",
        lat: 37.973412364724574,
        long: -84.89762567486062,
        city: 'Lawrenceburg', 
        state: 'KY',
        description: "Four Roses is a brand of Kentucky straight bourbon whiskey produced by the Kirin Brewery Company of Japan. The brand's distillery in Lawrenceburg, 
                      Kentucky, was built in 1910 with Spanish Mission-style architecture, and is listed on the National Register of Historic Places. The company's 
                      warehouse for aging and bottling operations is in Cox's Creek, Kentucky. The brand and its products have evolved and transformed since the company's 
                      founding in the late 19th century, and especially since the firm's acquisition at the beginning of the 21st century.",
        established: '1910'
    },
    {
        name: 'Wyoming Whiskey',
        lat: 43.80509361401849,
        long: -108.17703047028782,
        city: 'Kerby',
        state: 'WY',
        description: 'WYOMING. FAMILY. WHISKEY. IN THAT ORDER. We are independent, family-owned whiskey makers with a world-class distillery in the Big Horn Basin of 
                      Wyoming. Our company and products are a collaboration between our partners and 97,818 square miles of Wyoming. The state defines us; it’s in our 
                      blood and in our whiskey.',
        established: '2009'
    },
    {
        name: 'Charbay Distillery',
        lat: 39.111733148804426,
        long: -123.1964912925734,
        city: "Napa",
        state: "CA",
        description: 'Our family is committed to offering the finest spirits made in the true spirit of American creativity, while grounded in 13 generations of old world 
                      European knowledge. We are proud to say, there is no other family in the United States that can claim to hand-producing the scope of handcrafted 
                      wines & spirits than that of Charbay. Founder, Milorad (Miles) Karakasevic, traces his family winemaking & distilling heritage over 250 years to 1751 
                      in former-Yugoslavia. After receiving both formal and classical apprenticeship training, Miles arrived in North America at the age of 21. Through the 
                      years, he and our family have created an American legacy of consistent quality... and consistent surprises.',
        established: '1983'
    },
    {
        name: "Virginia Distillery Co.",
        lat: 37.782346041358466, 
        long: -78.86297830185002,
        city: 'Lovingston',
        state: 'VA',
        description: 'The late Dr. George G. Moore had a great passion for single malt whisky and his adopted home in Virginia. A native Irishman, George came to 
                      the U.S. in the 1970’s to seek new opportunities. In 2011, after many years of building successful businesses in both the U.S. and Ireland, 
                      George finally had the chance to combine his two passions when he started Virginia Distillery Company. Today, George’s wife, Angela Moore and 
                      their son, Gareth Moore, along with his wife, Maggie Moore, have taken the helm to continue building George’s dream. At Virginia Distillery Company, 
                      we carry George’s legacy forward by reinventing American single malt whisky. Every barrel is a culmination of the world’s finest distilling, 
                      aged to perfection in the ideal climate of Virginia’s Blue Ridge Mountains. While inspired by time-honored traditions, we forge traditions of our 
                      own- making whisky more than what has been, while remaining true to ourselves and our home.',
        established: '2011'
    },
    {
        name: "Dad's Hat",
        lat: 40.10408678457317,
        long: -74.85170700601226,
        city: "Bristol",
        state: "PA",
        description: 'We founded Dad’s Hat Rye because we, too, want to do it the right way. To take up a tradition and make something that mattered — by hand, 
                      in small batches, using only natural, local ingredients and the most careful methods. Dad’s Hat is made right here in Pennsylvania – the birthplace 
                      of genuine rye whiskey – in honor of my father, who enjoyed rye whiskey and served it at the family’s tavern, and of that wonderful, optimistic time 
                      in America’s history when we made a lot of things and took care to make them well. My heart tells me that many of us are searching for that spirit 
                      again. We believe Dad’s Hat Rye reflects that same simple, uniquely American personality better than any other whiskey. Crisp. Smooth. 
                      Delicious – not lingering or heavy-handed in its finish. Perfect for every occasion. After tasting Dad’s Hat, we hope that you feel the same way.',
        established: '2011'
    },
    {
        name: 'Leopold Bros',
        lat: 39.79293473581162,
        long: -104.86184111715247,
        city: 'Denver',
        state: 'Colorado',
        description: "In the mid-2000s, Todd and Scott relocated Leopold Bros. operations from Michigan to their home state of Colorado to focus solely on distilling. 
                      They opened shop in a small, rented, workspace in an industrial neighborhood in northeast Denver. Several years later, Todd and Scott purchased 
                      four acres of nearby land to build out their ideal distillery, including systems to create a zero-waste facility by recycling water, composting, 
                      and other methods. In addition a larger space to accommodate all their fermenters and stills, the site would also be home to Colorado's first 
                      distillery malting floor and kiln, as well as a dunnage-style barrelhouse, a tasting room, and education center. The Leopold Bros. distillery as 
                      it stands today opened in 2014.",
        established: '1999'
    },
    {
        name: 'Smooth Ambler',
        lat: 37.863910729243074,
        long: -80.40026618835557,
        city: 'Maxwelton',
        state: 'WV',
        description: 'In 2009, Smooth Ambler Spirits was founded with the simple goal of producing the best whiskey by using the best of everything available to us. 
                      West Virginia is a fine place to make whiskey, providing excellent local grain and water, the perfect cadence of seasons for mellow aging, and 
                      hardworking people who know how to get things done with skill and pride. A craft distiller, respected curator of sourced whiskey, and down-to-earth 
                      innovator, Smooth Ambler offers a family of delicious bourbons and ryes including whiskeys that are homemade, sourced, and a blend of both. 
                      Committed to shooting straight with our customers, ourselves, and our industry, we celebrate the honesty and transparency that are integral parts 
                      of always trying to do things right.',
        established: '2009'
    },
    {
        name: 'Whistle Pig',
        lat: 43.912225889018806,
        long: -73.27608688570652,
        city: 'Shoreham',
        state: 'VT',
        description: 'WhistlePig began when we purchased our farm in 2007. After a few years of deep consideration and personal reflection we committed ourselves to 
                      crafting the world’s finest and most interesting Rye Whiskeys. With help from Master Distiller Dave Pickerell, we discovered and purchased an incredible stock 
                      of 10 year old blending Whiskey in Canada that was being profoundly misused. That initial stock, for which we are forever grateful, is what kicked off our grand 
                      adventure.',
        established: '2008'
    }
]

Distillery.create(distilleries)

# whiskeys = [
#     {
#         name: ,
#         type: ,
#         abv: ,
#         proof: ,
#         description: ,
#         distillery_id: ,
#     }
# ]