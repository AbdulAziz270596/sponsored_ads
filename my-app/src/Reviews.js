
import "./App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Reviews() {
  const users = [
    {
      id: 1,
      title: "programming Rwanda Interface cyan Card deposit Plastic Guarani",
      cover: "http://placeimg.com/600/400/nightlife",
      summary: "Expedita est impedit doloribus sit sunt ipsum magnam ea. Voluptatem dolorem nam.",
      bookmarked: true,
      likes: 43
    },
    {
      id:2,
      title: "Bacon Granite Tajikistan Direct Small calculating Chair",
      cover: "http://placeimg.com/600/400/nightlife",
      summary: "Commodi consequatur laborum accusantium iure quis. Cupiditate sit consequatur ipsa quo temporibus voluptas officiis. Sed sit beatae temporibus dolorum.",
      bookmarked: true,
      likes: 29
    },
    {
      id:3,
      title: "state Self-enabling Movies",
      cover: "http://placeimg.com/600/400/nightlife",
      summary: "Libero facere eius aspernatur numquam officia tenetur. Veniam accusantium sunt et optio dolores libero accusantium quos. Consequatur at aut modi distinctio qui veniam eveniet neque dolorum. Atque esse odit architecto iusto. Reiciendis beatae saepe quia non aut quo. Maxime iste praesentium sed perspiciatis.",
      bookmarked: false,
      likes: 5
    },
    {
      id:4,
      title: "Berkshire Loan Electronics Bacon",
      cover: "http://placeimg.com/600/400/nightlife",
      summary: "Enim architecto modi harum fugit. Dolor consectetur facere voluptas labore non qui exercitationem. Quia facilis voluptatem quibusdam dolor quo architecto error doloribus velit.",
      bookmarked: false,
      likes: 25
    },
    {
      id:5,
      title: "Integration Sleek Awesome Plastic Bedfordshire",
      cover: "http://placeimg.com/600/400/nightlife",
      summary: "Qui eos dignissimos et. Sunt sunt voluptatem commodi sunt consequatur ea pariatur voluptas quasi. Quo itaque placeat. Et est a non ratione et quasi.",
      bookmarked: true,
      likes: 24
    },
    {
      id:6,
      title: "Specialist Port Loaf",
      cover: "http://placeimg.com/600/400/nightlife",
      summary: "Velit odio magni ipsum animi corporis deserunt facere eveniet quo. Ex ducimus dolores quae et consequatur minus dolorem. Esse ducimus adipisci architecto enim eligendi et aut nihil. Sunt adipisci sit in cum laudantium. Voluptas ut perspiciatis itaque minus cupiditate.",
      bookmarked: true,
      likes: 15
    },
    {
      id:7,
      title: "Generic Kip Forward Oklahoma B2C olive North Home Cambridgeshire Parks Home Granite",
      cover: "http://placeimg.com/600/400/nightlife",
      summary: "Voluptatibus consequuntur laborum consequuntur ut culpa perspiciatis aliquam. Id pariatur quod ipsam est magni quidem quam expedita voluptas.",
      bookmarked: false,
      likes: 2
    },
    {
      id:8,
      title: "generate withdrawal auxiliary Usability Australian Chicken Small Squares 24/365 Gorgeous Maryland Arizona",
      cover: "http://placeimg.com/600/400/nightlife",
      summary: "Qui fugiat provident.",
      bookmarked: true,
      likes: 23
    },
    {
      id:9,
      title: "Borders Bulgaria SSL Peso generate Trafficway Creative models Oregon",
      cover: "http://placeimg.com/600/400/nightlife",
      summary: "Eum minus molestiae sequi itaque qui quod qui soluta. Sequi cupiditate expedita magni.Illo pariatur ut eveniet error sint veritatis ullam.",
      bookmarked: true,
      likes: 40
    },
    {
      id:10,
      title: "Refined Automotive methodical clear-thinking optimal",
      cover: "http://placeimg.com/600/400/nightlife",
      summary: "Nisi aut velit voluptates ex. Consequatur quis soluta maxime consectetur impedit quis.",
      bookmarked: true,
      likes: 24
    },
    {
      id:11,
      title: "Refined Automotive methodical clear-thinking optimal.",
      cover: "http://placeimg.com/600/400/nightlife",
      summary: "Nisi aut velit voluptates ex. Consequatur quis soluta maxime consectetur impedit quis.",
      bookmarked: true,
      likes: 4
    },
    {
      id:12,
      title: "Electronics models Unbranded Fresh Soap",
      cover: "http://placeimg.com/600/400/nightlife",
      summary: "Omnis repellat dolor. Et illo dignissimos provident dolor voluptatem assumenda unde veniam necessitatibus.",
      bookmarked: true,
      likes: 21
    },
    {
      id:13,
      title: "generate withdrawal auxiliary Usability Australian Chicken Small Squares",
      cover: "http://placeimg.com/600/400/nightlife",
      summary: "Sint eveniet et ex ab. Quaerat minima esse tempore fuga et. Omnis et optio doloremque qui veritatis nostrum dolore nisi laboriosam.",
      bookmarked: true,
      likes: 42
    },
    {
      id:14,
      title: "sensor Senior Home Cambridgeshire overriding Cross-platform system empower back-end",
      cover: "http://placeimg.com/600/400/nightlife",
      summary: "Incidunt molestiae praesentium voluptatum minus mollitia nostrum deleniti inventore consectetur.",
      bookmarked: true,
      likes: 8
    },
    {
      id:15,
      title: "XSS program Leu Operations withdrawal Central gold",
      cover: "http://placeimg.com/600/400/nightlife",
      summary: "Pariatur et quisquam et et quidem. Ut voluptates voluptatum expedita ex temporibus sunt expedita delectus.",
      bookmarked: false,
      likes: 15
    },
    {
      id:16,
      title: "driver Tasty Checking driver Refined",
      cover: "http://placeimg.com/600/400/nightlife",
      summary: "Possimus quas velit qui nisi et est nulla voluptatem. Consequuntur est enim tempore aspernatur. Perspiciatis totam suscipit quibusdam. Voluptas laboriosam veritatis voluptatibus reprehenderit.",
      bookmarked: true,
      likes: 41
    },
    {
      id:17,
      title: "generation deposit Director port focus Chair Tasty deposit",
      cover: "http://placeimg.com/600/400/nightlife",
      summary: "Eveniet commodi aut molestiae eaque quod.",
      bookmarked: true,
      likes: 23
    },
    {
      id:18,
      title: "functionalities Plastic Home 1080p leverage strategize action-items architectures Optional",
      cover: "http://placeimg.com/600/400/nightlife",
      summary: "Nihil aperiam blanditiis repellendus commodi. Laudantium optio iusto sint odit at sed non vitae. Sunt quo distinctio eius laudantium qui quia quam.",
      bookmarked: true,
      likes: 41
    },
    {
      id:19,
      title: "Canada program Account Manager matrix world-class",
      cover: "http://placeimg.com/600/400/nightlife",
      summary: "A nulla quae et veniam aut similique sunt. Est quia quo eaque quibusdam aut voluptatum cum officiis.",
      bookmarked: true,
      likes: 9
    },
    {
      id:20,
      title: "Frozen white bricks-and-clicks haptic CSS Bedfordshire Ball",
      cover: "http://placeimg.com/600/400/nightlife",
      summary: "Totam suscipit qui consectetur nisi. Non voluptatem voluptatem aut consequatur enim iste. Qui aut molestiae cum commodi rerum. Natus excepturi at amet voluptatem molestiae modi. Dolorem consequatur non qui recusandae est corporis. Modi dicta accusantium sit est voluptatibus dolores.",
      bookmarked: true,
      likes: 2
    },
    {
      id:21,
      title: "Fresh Handmade wireless input plum indigo bandwidth-monitored",
      cover: "http://placeimg.com/600/400/nightlife",
      summary: "Ut ea minus sed quod enim animi error. Illo eius ad consectetur assumenda esse. Molestiae quia eaque ut modi molestiae et alias. Et enim non exercitationem consequuntur laborum asperiores et. Non fuga veniam et animi aut.",
      bookmarked: false,
      likes: 25
    },
    {
      id:22,
      title: "open-source New Montana encoding Account Human software Micronesia Small Plastic",
      cover: "http://placeimg.com/600/400/nightlife",
      summary: "Sunt odio aut eaque quis nihil. Doloremque hic est magnam ea unde similique veritatis perspiciatis. Similique rerum autem magni.",
      bookmarked: true,
      likes: 18
    },
    {
      id:23,
      title: "Cotton revolutionary Table Assimilated ",
      cover: "http://placeimg.com/600/400/nightlife",
      summary: "In id molestiae velit facere et rerum sunt et. Rem voluptatem ea et assumenda est nisi alias. Et id quia in inventore consequatur omnis quia. Quibusdam quasi id aut eum possimus voluptas.",
      bookmarked: true,
      likes: 17
    },
    {
      id:24,
      title: "Alaska connecting Isle Metal Account",
      cover: "http://placeimg.com/600/400/nightlife",
      summary: "Aut a dolorem fugit molestias dolores suscipit. Optio reiciendis sit minus quo beatae odit occaecati tenetur. Voluptatem tempora et quia atque.",
      bookmarked: true,
      likes: 49
    },
    {
      id:25,
      title: "Berkshire user withdrawal portal",
      cover: "http://placeimg.com/600/400/nightlife",
     summary: "Eos tenetur enim totam accusantium nobis neque aut qui sunt. Veniam delectus dolores cupiditate deleniti sequi ipsam repudiandae pariatur.",
      bookmarked: false,
      likes: 38
    },
    {
      id:26,
      title: "Usability metrics Ball Checking interface Cotton fresh-thinking circuit strategize Granite Direct",
      cover: "http://placeimg.com/600/400/nightlife",
      summary: "Enim ipsum numquam. Odit esse itaque consequatur delectus sequi sequi. Cupiditate quas exercitationem doloremque accusantium voluptates suscipit.",
      bookmarked: true,
      likes: 10
    },
    {
      id:27,
      title: "Program Chair supply-chains Consultant 1080p hub bandwidth Automotive",
      cover: "http://placeimg.com/600/400/nightlife",
      summary: "Iusto molestiae eius consectetur quod. Alias ut sint cum harum optio repudiandae ex temporibus. Aut unde cum. Iste est expedita perferendis rerum.",
      bookmarked: false,
      likes: 1
    },
    {
      id:28,
      title: "content invoice e-business Metal orange Account Cambridgeshire Pizza",
      cover: "http://placeimg.com/600/400/nightlife",
      summary: "Sint sit non labore ullam ducimus totam facere assumenda. Veniam omnis et consectetur. Quasi amet et nobis accusantium magni. Exercitationem itaque cumque perferendis qui qui.",
      bookmarked: true,
      likes: 26
    }, 
    {
      id:29,
      title: "Gold navigating Security Groves USB",
      cover: "http://placeimg.com/600/400/nightlife",
      summary: "Minus nostrum voluptas. Amet et nihil suscipit aut eum nihil. Quisquam et ab qui blanditiis optio similique. Ut molestiae nulla molestiae a dolor tenetur. Recusandae qui vero possimus aut cum.",
      bookmarked: false,
      likes: 11
    },
    {
      id:30,
      title:  "Sleek Pizza visualize Steel Bacon Account Seychelles",
      cover: "http://placeimg.com/600/400/nightlife",
      summary: "Tempore iusto alias maiores. Doloribus fugit et. Totam sed facere sed omnis.",
      bookmarked: true,
      likes: 24
    },
  ];
  const listReview = users.map((itemReview) => (
    <div key={itemReview.id} className="box">
      <div className="imgBx">
        <img src={itemReview.cover}/>
        <h3>{itemReview.title}</h3>
        <p>{itemReview.summary}</p>
      </div>
      <div className="outline">
        <i className="fontawesomeicon">{itemReview.likes}</i>
        <FontAwesomeIcon className="i" name={itemReview.likes}/>
        <FontAwesomeIcon className="i" icon="heart"/>
        <FontAwesomeIcon className="i" icon="tag"/>
        <FontAwesomeIcon className="i" icon="share-square"/>
      </div>
      <div className="outline-3">
        <a href="#" className="sponsored">Sponsored Ad</a>
      </div>
    </div>
  ));
  return (
    <div className="content">
      {listReview}
    </div>
  );
}

export default Reviews;
