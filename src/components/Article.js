import image1 from "../images/blog-image-1.jpg";
import image2 from "../images/blog-image-2.jpg";
export default function Article(props) {
  return (
    <main>
      <article>
        <time datetime="11-12-2020">11/12/20</time>
        <h2>On the Street in Brooklyn</h2>
        <img src={image1} alt="Orange dress" />
        <p>
          {" "}
          <span>C</span>ray ipsum, dolor sit amet consectetur adipisicing elit.
          Ornare curabitur eleifend ornare cursus tristique dictum praesent
          litora! Metus at, tempor taciti id vestibulum ultricies vulputate.
          Conubia parturient duis penatibus himenaeos varius? Mattis praesent
          duis dignissim luctus cum facilisi. Leo quam taciti eget tristique
          aliquet cursus ante dapibus cum vitae. Dapibus facilisis nisi donec
          ridiculus dapibus id potenti augue inceptos. Mus sit vehicula
          scelerisque. Potenti sodales egestas porta torquent in adipiscing
          ipsum tempor interdum eros. Nibh donec mauris tempus. Id architecto
          impedit consequatur rem quaerat voluptatibus pariatur quas, quod
          quisquar quo ab molestiae.
        </p>
        <h3 class="continue">Continues ...</h3>
      </article>

      <article>
        <time datetime="11-12-2020">11/12/20</time>
        <h2>Vintage in Vogue</h2>
        <img src={image2} alt="Vogue" />
        <p>
          <span>S</span>elfies sunt, dolor sit amet consectetur adipisicing
          elit. lorem magnis velit nullam himenaeos inceptos sit himenaeos at.
          Nam id cursus elementum dictumst eu pellentesque habitant. Neque
          curabitur dignissim pretium nam malesuada? Aptent dolor cras elit eros
          cursus ac ullamcorper proin erat auctor est eleifend. Consectetur
          commodo libero etiam mollis euismod phasellus scelerisque tempus
          lacinia. Feugiat malesuada interdum mi aenean consectetur etiam
          vehicula placerat consequat scelerisque! Quisque vulputate rutrum cras
          dictum tempor natoque facilisis orci litora non.
        </p>
        <h3 class="continue">Continues ...</h3>
      </article>
    </main>
  );
}
