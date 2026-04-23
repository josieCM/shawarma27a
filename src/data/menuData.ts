export interface MenuItem {
  id: string;
  name: string;
  price: string;
  numericPrice: number;
  description: string;
  tag?: string;
  image?: string;
  category: string;
}

export const MENU_DATA = [
  {
    id: 'birthday-packs',
    title: 'Birthday Packs',
    items: [
      {
        id: 'bp-1',
        name: 'KISHKAJI BIRTHDAY PACK (Watu 3–5)',
        price: '65,000/=',
        numericPrice: 65000,
        description: 'Zege cake ngazi 3, Kuku Choma 1, Beef Mishkaki 5, Sausage 5, Chips Kavu, Soda BONGE 1',
        tag: 'Popular',
        category: 'Birthday Packs',
        image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800&auto=format&fit=crop'
      },
      {
        id: 'bp-2',
        name: 'KISHUA BIRTHDAY PACK (Watu 5–8)',
        price: '100,000/=',
        numericPrice: 100000,
        description: 'Zege cake Ngazi 4, Kuku Choma 2, Beef Mishkaki 8, Sausage 8, Chips Kavu 2, Soda BONGE 2',
        tag: 'Large',
        category: 'Birthday Packs',
        image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?q=80&w=800&auto=format&fit=crop'
      }
    ]
  },
  {
    id: 'love-box',
    title: 'Love Box',
    items: [
      {
        id: 'lb-1',
        name: 'LOVE PACK',
        price: '30,000/=',
        numericPrice: 30000,
        description: 'Kuku choma, Mishkaki, Sausage, Chips, Snacks Pack (Crisps, Chocolate, Candies, Soda), Shawarma, Gift Box & Note',
        tag: 'Gift',
        category: 'Love Box',
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop'
      }
    ]
  },
  {
    id: 'lunch-box',
    title: 'Lunch Box',
    items: [
      {
        id: 'lx-1',
        name: 'SPECIAL CHANGAMOTO',
        price: '10,000/=',
        numericPrice: 10000,
        description: 'Mixer ya Beef na Sausage Kitunguu, Tamu sana. With Chips / Ugali / Ndizi 2',
        tag: 'Best Seller',
        category: 'Lunch Box',
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop'
      },
      {
        id: 'lx-2',
        name: 'KUKU MREMBO (MAKANGE)',
        price: '15,000/=',
        numericPrice: 15000,
        description: 'Kuku Makange served with your choice of side.',
        category: 'Lunch Box',
        image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=800&auto=format&fit=crop'
      }
    ]
  },
  {
    id: 'big-bites',
    title: 'Big Bites',
    items: [
      {
        id: 'bb-1',
        name: 'Chicken Shawarma',
        price: '7,000/=',
        numericPrice: 7000,
        description: 'Served with Chips',
        tag: 'Classic',
        category: 'Big Bites',
        image: 'https://images.unsplash.com/photo-1561651823-34feb02250e4?q=80&w=800&auto=format&fit=crop'
      },
      {
        id: 'bb-2',
        name: 'King Beef Burger',
        price: '15,000/=',
        numericPrice: 15000,
        description: 'Double Patty, Double Cheese, Sunny side Egg, served with Chips',
        tag: 'King Size',
        category: 'Big Bites',
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop'
      }
    ]
  }
];