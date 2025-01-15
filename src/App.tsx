import React from 'react';
import { Scissors, CircleUserRound, Sparkles, Package, Wine, Clock, MessageCircle } from 'lucide-react';

function SecaoMenu({ titulo, icone, children }: { titulo: string; icone: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="mb-12">
      <div className="flex items-center gap-2 mb-6">
        <div className="text-amber-700">{icone}</div>
        <h2 className="text-2xl font-bold text-gray-800">{titulo}</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {children}
      </div>
    </div>
  );
}

function ItemMenu({ titulo, descricao, preco }: { titulo: string; descricao: string; preco: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{titulo}</h3>
      <p className="text-gray-600 mb-4 min-h-[60px]">{descricao}</p>
      <p className="text-amber-700 font-bold">R$ {preco}</p>
    </div>
  );
}

function App() {
  const whatsappNumber = "5511999999999"; // Substitua pelo número real
  const whatsappMessage = "Olá! Gostaria de agendar um horário na Barbearia Visual.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Seção Hero */}
      <div 
        className="h-[40vh] bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center text-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Barbearia Visual</h1>
            <p className="text-xl text-amber-400">Onde a tradição encontra o estilo moderno</p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              <MessageCircle size={24} />
              Agende seu Horário
            </a>
          </div>
        </div>
      </div>

      {/* Conteúdo do Menu */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <SecaoMenu titulo="Cortes de Cabelo" icone={<Scissors size={24} />}>
          <ItemMenu
            titulo="Corte Clássico"
            descricao="Corte tradicional com tesoura e máquina, finalizado conforme sua preferência"
            preco="50"
          />
          <ItemMenu
            titulo="Corte Degradê"
            descricao="Degradê moderno com transição suave, perfeito para looks urbanos"
            preco="60"
          />
          <ItemMenu
            titulo="Corte Navalhado"
            descricao="Corte com navalha para um visual preciso e marcante"
            preco="70"
          />
        </SecaoMenu>

        <SecaoMenu titulo="Serviços de Barba" icone={<CircleUserRound size={24} />}>
          <ItemMenu
            titulo="Aparar Barba"
            descricao="Aparação e modelagem da barba com tesoura e máquina"
            preco="40"
          />
          <ItemMenu
            titulo="Serviço Completo de Barba"
            descricao="Aparação, modelagem, toalha quente e tratamento com óleos premium"
            preco="60"
          />
          <ItemMenu
            titulo="Barba Tradicional"
            descricao="Barbear clássico com navalha, toalha quente e produtos premium"
            preco="80"
          />
        </SecaoMenu>

        <SecaoMenu titulo="Tratamentos" icone={<Sparkles size={24} />}>
          <ItemMenu
            titulo="Hidratação Capilar"
            descricao="Tratamento revitalizante para cabelos macios e saudáveis"
            preco="45"
          />
          <ItemMenu
            titulo="Hidratação de Barba"
            descricao="Tratamento profundo com óleo e máscara nutritiva"
            preco="35"
          />
          <ItemMenu
            titulo="Limpeza Facial"
            descricao="Limpeza facial profunda para remover impurezas e revitalizar a pele"
            preco="90"
          />
        </SecaoMenu>

        <SecaoMenu titulo="Pacotes Completos" icone={<Package size={24} />}>
          <ItemMenu
            titulo="Pacote Clássico"
            descricao="Corte de cabelo + Aparar barba"
            preco="80"
          />
          <ItemMenu
            titulo="Pacote Premium"
            descricao="Corte de cabelo + Serviço completo de barba + Hidratação de barba"
            preco="120"
          />
          <ItemMenu
            titulo="Pacote Master"
            descricao="Corte navalhado + Barba tradicional + Limpeza facial"
            preco="150"
          />
        </SecaoMenu>

        <SecaoMenu titulo="Bebidas" icone={<Wine size={24} />}>
          <ItemMenu
            titulo="Whisky Premium"
            descricao="Aprecie uma dose de whisky premium durante seu serviço"
            preco="25"
          />
          <ItemMenu
            titulo="Cerveja Artesanal"
            descricao="Cerveja artesanal selecionada para complementar sua experiência"
            preco="18"
          />
          <ItemMenu
            titulo="Água Mineral ou Refrigerante"
            descricao="Bebidas refrescantes"
            preco="5"
          />
        </SecaoMenu>

        {/* Horário de Funcionamento */}
        <div className="mt-16 bg-gray-800 text-white p-8 rounded-lg">
          <div className="flex items-center gap-2 mb-4">
            <Clock size={24} className="text-amber-400" />
            <h2 className="text-2xl font-bold">Horário de Funcionamento</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <p>Segunda a Sexta: 10h - 20h</p>
            <p>Sábado: 9h - 18h</p>
            <p>Domingo: Fechado</p>
          </div>
        </div>

        {/* Botão de WhatsApp Fixo */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg transition-colors"
          aria-label="Agendar pelo WhatsApp"
        >
          <MessageCircle size={32} />
        </a>
      </div>
    </div>
  );
}

export default App;