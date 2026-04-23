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
  // 🎉 BIRTHDAY PACKS
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
        category: 'Birthday Packs’,
        image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800&auto=format&fit=crop'
	
      },
      {
        id: 'bp-2',
        name: 'KISHUA BIRTHDAY PACK (Watu 5–8)',
        price: '100,000/=',
        numericPrice: 100000,
        description: 'Zege cake Ngazi 4, Kuku Choma 2, Beef Mishkaki 8, Sausage 8, Chips Kavu 2, Soda BONGE 2',
        tag: 'Large',
        category: 'Birthday Packs’,
      	image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?q=80&w=800&auto=format&fit=crop'
     }
    ]
  },

  // 🎁 LOVE BOX
  {
    id: 'love-box',
    title: 'Love Box',
    items: [
      {
        id: 'lb-1',
        name: 'LOVE PACK',
        price: '30,000/=',
        numericPrice: 30000,
        description: 'Kuku choma, Mishkaki, Sausage, Chips + Snacks Pack (Crisps, Chocolate, Candies, Soda) + Shawarma + Gift Box & Note',
        tag: 'Gift',
        category: 'Love Box’,
	      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop'
      }
    ]
  },

  // 🍱 LUNCH BOX
  {
    id: 'lunch-box',
    title: 'Lunch Box',
    items: [
      {
        id: 'lx-1',
        name: 'SPECIAL CHANGAMOTO',
        price: '10,000/=',
        numericPrice: 10000,
        description: 'Mixer ya Beef na Sausage Kitunguu (With Chips / Ugali / Ndizi 2)',
        tag: 'Best Seller',
        category: 'Lunch Box’,
	      image: ‘https://ibb.co/KxDngGbh'
      },
      {
        id: 'lx-1b',
        name: 'SPECIAL CHANGAMOTO (Chips Only)',
        price: '12,000/=',
        numericPrice: 12000,
        description: 'Mixer ya Beef na Sausage Kitunguu served with Chips viazi',
        category: 'Lunch Box’,
	      image: ‘https://ibb.co/s9VGnTZk'
      },
      {
        id: 'lx-2',
        name: 'KUKU MREMBO (MAKANGE)',
        price: '15,000/=',
        numericPrice: 15000,
        description: 'Kuku Makange served with sides',
        category: 'Lunch Box’,
	      image: ‘https://ibb.co/kjHCxHd'
      },
      {
        id: 'lx-3',
        name: 'KUKU KICHAA (KITUNGUU)',
        price: '15,000/=',
        numericPrice: 15000,
        description: 'Kuku Kitunguu served with sides',
        category: 'Lunch Box’,
	      image: ‘https://ibb.co/WWqCGjJr'
      },
      {
        id: 'lx-4',
        name: 'MAKANGE MIXER',
        price: '15,000/=',
        numericPrice: 15000,
        description: 'Kuku Makange mixed with Sausage & Beef Mishkaki + Chips/Ndizi',
        category: 'Lunch Box’,
	      image: ‘https://ibb.co/KxDngGbh'
      }
    ]
  },

  // 🔥 SPECIAL COMBOS
  {
    id: 'special-combos',
    title: 'Special Combos',
    items: [
      {
        id: 'sc-1',
        name: 'KITAA MIX',
        price: '19,000/=',
        numericPrice: 19000,
        description: 'Kuku Makange + Changamoto + Mishkaki + Ugali/Chips/Ndizi',
        tag: 'Combo',
        category: 'Special Combos’,
	      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop'
      },
      {
        id: 'sc-2',
        name: 'KOMBO KALI',
        price: '17,000/=',
        numericPrice: 17000,
        description: 'Changamoto + Kuku Choma 1/4 + Mishkaki + Ugali/Chips/Ndizi',
        category: 'Special Combos’,
	      image: ‘https://ibb.co/KxDngGbh'
      },
      {
        id: 'sc-3',
        name: 'MAKANGE SUPER COMBO',
        price: '19,000/=',
        numericPrice: 19000,
        description: 'Kuku Makange + Sausage + Mishkaki + Zege',
        tag: 'Popular',
        category: 'Special Combos’,
	      image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?q=80&w=800&auto=format&fit=crop'
      },
      {
        id: 'sc-4',
        name: 'VURUGA MIX MIX',
        price: '15,000/=',
        numericPrice: 15000,
        description: 'Mixed Kuku, Mishkaki, Sausage and Chips',
        category: 'Special Combos’,
	      image: ‘https://ibb.co/s9VGnTZk'
      }
    ]
  },

  // 🍖 PLATTERS
  {
    id: 'platters',
    title: 'Platters',
    items: [
      {
        id: 'pl-1',
        name: 'SOTOJO PLATTER',
        price: '35,000/=',
        numericPrice: 35000,
        description: 'Kuku Makange + Changamoto + Kuku Choma 1/2 + Mishkaki + Sausage + Chips',
        tag: 'Group',
        category: 'Platters’, 
        image: ‘https://ibb.co/WWqCGjJr’
      },
      {
        id: 'pl-2',
        name: 'UGALI SOTOJO',
        price: '23,000/=',
        numericPrice: 23000,
        description: 'Kuku Makange + Kuku Choma 1/2 + Mishkaki + Ugali + Ndizi',
        category: 'Platters’,
	      image: ‘https://ibb.co/s9VGnTZk'
      }
    ]
  },

  // 🍔 BIG BITES
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
        category: 'Big Bites’,
      	image: ‘https://ibb.co/KxDngGbh'
      },
      {
        id: 'bb-2',
        name: 'Bonge Chicken Shawarma',
        price: '12,000/=',
        numericPrice: 12000,
        description: 'Large shawarma served with Chips',
        tag: 'Large',
        category: 'Big Bites’,
      	image: ‘https://ibb.co/kjHCxHd'
      },
      {
        id: 'bb-3',
        name: 'Beef Mishkaki Wrap',
        price: '7,000/=',
        numericPrice: 7000,
        description: 'Wrapped with sauces and salads + Chips',
        category: 'Big Bites’,
      	image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?q=80&w=800&auto=format&fit=crop'
      },
      {
        id: 'bb-4',
        name: 'King Beef Burger',
        price: '15,000/=',
        numericPrice: 15000,
        description: 'Double Patty, Double Cheese, Egg + Chips',
        tag: 'King Size',
        category: 'Big Bites’,
      	image: 'https://ibb.co/0Hzy9kT'
      }
    ]
  },

  // 🔥 BIG 3 COMBOS
  {
    id: 'big-3-combos',
    title: 'Big 3 Combos',
    items: [
      {
        id: 'b3-1',
        name: 'TWINS COMBO',
        price: '12,000/=',
        numericPrice: 12000,
        description: '2 Chicken Shawarma + Chips',
        category: 'Big 3 Combos’,
	      image: ‘https://ibb.co/N6MKWLmw'
      },
      {
        id: 'b3-2',
        name: 'EAST WEST COMBO',
        price: '18,000/=',
        numericPrice: 18000,
        description: 'Chicken Shawarma + Beef Burger + Chips + Soda',
        category: 'Big 3 Combos’,
	      image: ‘https://ibb.co/N6MKWLmw'
      },
      {
        id: 'b3-3',
        name: 'BFF COMBO',
        price: '25,000/=',
        numericPrice: 25000,
        description: 'Chicken Shawarma + Beef Burger + Wings + Chips',
        tag: 'Best Value',
        category: 'Big 3 Combos’,
	      image: ‘https://ibb.co/N6MKWLmw'
      }
    ]
  }
];
