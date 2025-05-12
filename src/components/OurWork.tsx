import React, { useState } from 'react';
import { Briefcase, BookOpen, Gem, Cog as Yoga, Gift, Music, Heart, Leaf, School } from 'lucide-react';

interface WorkCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  image: string;
}

const OurWork: React.FC = () => {
  const categories: WorkCategory[] = [
    {
      id: 'independence',
      title: 'Independence Day Celebrations',
      icon: <Gift className="h-6 w-6 text-green-700" />,
      description: 'The Independence Day in India is celebrated every year on the 15th of August in honor of the birthday of the nation. On 15th August 1947, India achieved her independence from British rule and became a sovereign nation. The Independence Day is celebrated with great enthusiasm in all over the India. On this day tributes are paid to the freedom fighters who sacrificed their lives to gain the freedom for India. On this day HEAVEN ON EARTH FOUNDATION celebrates independence day at village bhanpur Delhi district on this independence day study material and sweets were distributed to all students. ',
      image: './gallery/work/independence.png'
    },
    {
      id: 'vocational',
      title: 'Silai Kadai & Vocational Training',
      icon: <Briefcase className="h-6 w-6 text-green-700" />,
      description: 'Training Programmes for the slum areas to aware the community about their Training and also undertakes various short term and long term Training programmes for poor and slum women to make them self dependent and to protect them from any type of exploitation. Society organise various Women Silai Kadai Training Programmes at various City & villages of Madhya Pradesh in which huge number of Women were gathered to understand the importance of Stitching , Embroidary , Ready Made Garments , silai kadhai along with Beauty Parlor Training Program under various Private / Public Sponsorship for the various Programs .In this training Program society provides the training of appx 75 women in the field of Vocational Training and other skill development training programs through out the year in various places of Delhi. ',
      image: './gallery/work/silai.png'
    },
    {
      id: 'jewelry',
      title: 'Artificial Jewellery / Papad Making',
      icon: <Gem className="h-6 w-6 text-green-700" />,
      description: 'Society undertakes under the Sponsorship of the various Active Social Group of Delhi under various Training Program such as ARTIFICIAL JEWELLARY / BEAUTY PARLOUR TRINING PROGRAM / PAPAD MAKING TRAINING amoung the BPL beneficiaries and in this Program more than 80 Women participated for the Learning of the Beauty Parlour Running and Training Skill . Programmes at various City & villages of Madhya Pradesh in which huge number of Women were gathered to understand the importance of Silai Kadai.',
      image: './gallery/work/jewelery.png'
    },
    {
      id: 'education',
      title: 'Education & Computer Literacy',
      icon: <BookOpen className="h-6 w-6 text-green-700" />,
      description: 'Providing quality education and digital literacy to bridge the technology gap and create future opportunities.',
      image: './gallery/work/education.png'
    },
    {
      id: 'health',
      title: 'Yoga and Health Camps',
      icon: <Yoga className="h-6 w-6 text-green-700" />,
      description: 'Yoga is an ancient physical, mental and spiritual practice that originated in India. The word ‘yoga’ derives from Sanskrit and means to join or to unite, symbolizing the union of body and consciousness . On 21st june 2019 HEAVEN ON EARTH FOUNDATION conduct free yoga camp . where large number of people participated. On this free yoga camp public got health benefits . around 300 of participants participated . outcome and response of this yoga camp was trimandus . HEAVEN ON EARTH FOUNDATION  organaized time to time over a year such kind of health camps. ',
      image: './gallery/work/yoga.png'
    },
    {
      id: 'cultural',
      title: 'Cultural Programs & Tribal Workshops',
      icon: <Music className="h-6 w-6 text-green-700" />,
      description: 'HEAVEN ON EARTH FOUNDATION celebrate ,Gandhi Jayanti , Teachers Day , Youth Day Celebration , Essay writing competition , Music Competition , Dance Competition , Sports and other competitions were organized in which all the society members participated and contributed a lot. Society runs various Cultural Promotion Program , Nukkad Natak and Other Festival Celebration Program on Teachers Day , Holi Milan Samaroh , Guri Padwa, Besakhi , Ambedkar Jayanti , Laxmi Bai jayanti and other activities for the year .',
      image: './gallery/work/cultural.png'
    },
    {
      id: 'awareness',
      title: 'Women & Child Development Program',
      icon: <Heart className="h-6 w-6 text-green-700" />,
      description: 'Conducted workshops on women’s rights, child nutrition, parenting, and provided basic support services to mothers and children.',
      image: './gallery/work/womenchild.png'
    },
    {
      id: 'environment',
      title: 'Environmental Initiatives',
      icon: <Leaf className="h-6 w-6 text-green-700" />,
      description: 'Tree plantation drives and awareness programs promoting environmental conservation and sustainability.',
      image: './gallery/work/tree.png'
    },
    {
      id: 'handicap',
      title: 'Handicap Welfare Program',
      icon: <School className="h-6 w-6 text-green-700" />,
      description: 'Provided aid including mobility devices, counseling, and health checkups to individuals with disabilities..',
      image: './gallery/work/disability.png'}

    ];

  const [activeCategory, setActiveCategory] = useState<string>(categories[0].id);

  const activeItem = categories.find(cat => cat.id === activeCategory);

  return (
    <section id="work" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Work</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We implement various programs to create sustainable impact across different aspects of community development.
          </p>
          <div className="w-20 h-1 bg-orange-500 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center w-full p-4 rounded-lg transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-green-700 text-white shadow-md'
                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                }`}
              >
                <span className="mr-3">{category.icon}</span>
                <span className="font-medium">{category.title}</span>
              </button>
            ))}
          </div>

          <div className="lg:col-span-2 bg-gray-50 rounded-xl overflow-hidden shadow-lg">
            {activeItem && (
              <div className="h-full flex flex-col">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={activeItem.image}
                    alt={activeItem.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6 flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{activeItem.title}</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">{activeItem.description}</p>
                  
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h4 className="text-lg font-semibold text-green-800 mb-2">Our Approach</h4>
                    <p className="text-gray-700">
                      We focus on sustainable solutions that empower communities to become self-reliant.
                      Our programs are designed with community input and participation to ensure they address real needs.
                    </p>
                  </div>
                </div>
                <div className="p-6 bg-green-50">
                  <a href="#involved" className="text-green-700 font-medium hover:text-green-800 transition-colors">
                    Want to support this initiative? Get involved →
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurWork;