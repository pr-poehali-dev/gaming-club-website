import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Index = () => {
  const services = [
    {
      icon: 'Gamepad2',
      title: 'Игровые станции',
      description: 'Мощные ПК с топовыми видеокартами RTX 4080',
      price: 'от 200₽/час'
    },
    {
      icon: 'Users',
      title: 'VIP-комнаты',
      description: 'Приватные залы для команд до 5 человек',
      price: 'от 500₽/час'
    },
    {
      icon: 'Trophy',
      title: 'Турниры',
      description: 'Еженедельные соревнования с призами',
      price: 'участие бесплатно'
    },
    {
      icon: 'Coffee',
      title: 'Бар и еда',
      description: 'Энергетики, снэки и быстрая еда',
      price: 'от 50₽'
    }
  ];

  const tournaments = [
    {
      game: 'CS2',
      date: '15 сентября',
      prize: '50,000₽',
      teams: '16/32'
    },
    {
      game: 'Valorant',
      date: '22 сентября', 
      prize: '30,000₽',
      teams: '8/16'
    },
    {
      game: 'Dota 2',
      date: '29 сентября',
      prize: '75,000₽',
      teams: '12/16'
    }
  ];

  const pricing = [
    {
      tier: 'Стандарт',
      price: '200₽/час',
      features: ['GTX 1660', '16GB RAM', '144Hz монитор', 'Базовая периферия']
    },
    {
      tier: 'Премиум',
      price: '350₽/час',
      features: ['RTX 4070', '32GB RAM', '240Hz монитор', 'Gaming клавиатура/мышь']
    },
    {
      tier: 'VIP',
      price: '500₽/час',
      features: ['RTX 4080', '64GB RAM', '360Hz монитор', 'Премиум переферия', 'Приватная комната']
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border backdrop-blur-sm bg-background/90 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Gamepad2" className="text-primary" size={32} />
              <h1 className="text-2xl font-bold text-primary">GAMING CLUB</h1>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">Главная</a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
              <a href="#pricing" className="text-foreground hover:text-primary transition-colors">Цены</a>
              <a href="#tournaments" className="text-foreground hover:text-primary transition-colors">Турниры</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">О клубе</a>
              <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button className="bg-primary hover:bg-primary/90 text-white font-semibold">
              Забронировать
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gaming-orange/20 to-gaming-cyan/20 blur-3xl opacity-30"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-6xl md:text-7xl font-black mb-6 bg-gradient-to-r from-gaming-orange to-gaming-cyan bg-clip-text text-transparent">
              ИГРОВОЙ КЛУБ
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Топовое оборудование, профессиональная атмосфера, незабываемые эмоции
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 text-lg">
                <Icon name="Calendar" className="mr-2" size={20} />
                Забронировать место
              </Button>
              <Button size="lg" variant="outline" className="border-gaming-cyan text-gaming-cyan hover:bg-gaming-cyan hover:text-gaming-navy font-semibold px-8 py-4 text-lg">
                <Icon name="MapPin" className="mr-2" size={20} />
                Как добраться
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gaming-dark">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center mb-12 text-foreground">Наши услуги</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary transition-colors hover:shadow-lg hover:shadow-primary/25">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                    <Icon name={service.icon as any} className="text-primary" size={32} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-muted-foreground mb-4">
                    {service.description}
                  </CardDescription>
                  <Badge variant="outline" className="border-primary text-primary">
                    {service.price}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center mb-12 text-foreground">Тарифы</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricing.map((plan, index) => (
              <Card key={index} className={`bg-card border-border ${index === 1 ? 'border-primary shadow-lg shadow-primary/25 scale-105' : ''}`}>
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.tier}</CardTitle>
                  <div className="text-3xl font-bold text-primary mt-2">{plan.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <Icon name="Check" className="text-gaming-cyan mr-3" size={16} />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6 bg-primary hover:bg-primary/90 text-white">
                    Выбрать тариф
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tournaments Section */}
      <section id="tournaments" className="py-16 bg-gaming-dark">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center mb-12 text-foreground">Турниры</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {tournaments.map((tournament, index) => (
              <Card key={index} className="bg-card border-border hover:border-gaming-cyan transition-colors">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{tournament.game}</CardTitle>
                    <Badge className="bg-gaming-orange text-white">{tournament.teams}</Badge>
                  </div>
                  <CardDescription>{tournament.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gaming-cyan mb-4">{tournament.prize}</div>
                    <Button variant="outline" className="border-gaming-cyan text-gaming-cyan hover:bg-gaming-cyan hover:text-gaming-navy">
                      Участвовать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-4xl font-bold mb-8 text-foreground">О клубе</h3>
            <p className="text-lg text-muted-foreground mb-8">
              GAMING CLUB в Озинках — это современное пространство для геймеров всех уровней. 
              У нас есть всё для комфортной игры: топовое железо, быстрый интернет, 
              профессиональная атмосфера и дружелюбное сообщество.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Игровых мест</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground">Работаем круглосуточно</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">5+</div>
                <div className="text-muted-foreground">Лет опыта</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-16 bg-gaming-dark">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center mb-12 text-foreground">Контакты</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="MapPin" className="text-primary mr-2" size={24} />
                  Адрес
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">г. Озинки, ул. Геймерская, 123</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Phone" className="text-primary mr-2" size={24} />
                  Телефон
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">+7 (123) 456-78-90</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Clock" className="text-primary mr-2" size={24} />
                  Время работы
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Круглосуточно, 7 дней в неделю</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Mail" className="text-primary mr-2" size={24} />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">info@gamingclub-ozinki.ru</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4">
              <Icon name="Calendar" className="mr-2" size={20} />
              Забронировать онлайн
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Icon name="Gamepad2" className="text-primary" size={24} />
              <span className="text-lg font-bold">GAMING CLUB</span>
            </div>
            <div className="flex space-x-4">
              <Icon name="Instagram" className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" size={20} />
              <Icon name="MessageCircle" className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" size={20} />
              <Icon name="Youtube" className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" size={20} />
            </div>
          </div>
          <Separator className="my-4" />
          <div className="text-center text-muted-foreground">
            <p>&copy; 2024 Gaming Club Озинки. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;