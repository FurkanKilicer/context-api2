import React from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Contact(props) {
   const contextSlide = React.useContext(ThemeContext);

  const { bgColor, textColor, btnColor, changeText } = contextSlide.changer;

  return (
    <div className={`card container mx shadow-lg ${bgColor}`}>
      <img className="card-img-top" />
      <div className="card-body">
        <h5 className={`card-title ${textColor}`}>Welcome Home</h5>
        <p className={`card-text ${textColor}`}>
          Yinelenen bir sayfa içeriğinin okuyucunun dikkatini dağıttığı bilinen
          bir gerçektir. Lorem Ipsum kullanmanın amacı, sürekli 'buraya metin
          gelecek, buraya metin gelecek' yazmaya kıyasla daha dengeli bir harf
          dağılımı sağlayarak okunurluğu artırmasıdır. Şu anda birçok masaüstü
          yayıncılık paketi ve web sayfa düzenleyicisi, varsayılan mıgır
          metinler olarak Lorem Ipsum kullanmaktadır. Ayrıca arama motorlarında
          'lorem ipsum' anahtar sözcükleri ile arama yapıldığında henüz tasarım
          aşamasında olan çok sayıda site listelenir. Yıllar içinde, bazen
          kazara, bazen bilinçli olarak (örneğin mizah katılarak), çeşitli
          sürümleri geliştirilmiştir.
        </p>
        <a href="#" className={`btn btn-primary ${btnColor}`}>
          Tüm Bilgiler İçin...
        </a>
      </div>
    </div>
  );
}
