<template>
    <div>
        <v-parallax :src="heroContent.bgImage" height="600">
            <div class="d-flex flex-column fill-height justify-center align-center text-white bg-black-opacity px-4">
                <h1 class="text-h3 text-md-h2 font-weight-bold mb-4 text-center">
                    {{ heroContent.title }}
                </h1>
                <h4 class="text-h6 text-md-h5 font-weight-light mb-6 text-center" style="max-width: 800px;">
                    {{ heroContent.subtitle }}
                </h4>
            </div>
        </v-parallax>

        <v-container class="py-16" id="services">
            <v-row justify="center" class="mb-8">
                <v-col cols="12" class="text-center">
                    <h2 class="text-h3 font-weight-bold text-primary mb-2">บริการของเรา</h2>
                    <v-divider length="100" thickness="4" color="secondary" class="mx-auto"></v-divider>
                </v-col>
            </v-row>

            <v-row>
                <v-col v-for="(service, i) in services" :key="i" cols="12" md="4">
                    <v-card hover class="h-100 text-center py-8 px-4" elevation="2">
                        <v-icon :icon="service.icon" size="64" color="secondary" class="mb-4"></v-icon>
                        <h3 class="text-h5 font-weight-bold mb-3">{{ service.title }}</h3>
                        <p class="text-body-1 text-grey-darken-1">{{ service.desc }}</p>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>

        <v-sheet color="primary" class="py-12">
            <v-container>
                <v-row text-center>
                    <v-col cols="12" md="3" v-for="stat in stats" :key="stat.title" class="text-center text-white">
                        <div class="text-h2 font-weight-bold">{{ stat.value }}</div>
                        <div class="text-subtitle-1">{{ stat.title }}</div>
                    </v-col>
                </v-row>
            </v-container>
        </v-sheet>

        <v-container class="py-16 bg-grey-lighten-4" fluid id="portfolio">
            <v-container>
                <v-row justify="center" class="mb-8">
                    <v-col cols="12" class="text-center">
                        <h2 class="text-h3 font-weight-bold text-primary mb-2">ผลงานล่าสุด</h2>
                        <p class="text-grey-darken-1">บ้านที่เราภูมิใจนำเสนอ จากความไว้วางใจของลูกค้า</p>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col v-for="(item, i) in portfolios" :key="i" cols="12" sm="6" md="4">
                        <v-card elevation="3" class="rounded-lg h-100">
                            <v-img :src="item.image" :alt="`แบบบ้าน ${item.title} โดย บ้านมั่นคง เอ็นจิเนียริ่ง`"
                                height="250" cover class="align-end">
                                <v-chip v-if="item.tags" color="secondary" class="ma-2" size="small" variant="flat">
                                    {{ item.tags[0] }}
                                </v-chip>
                            </v-img>

                            <v-card-item>
                                <v-card-title class="font-weight-bold">{{ item.title }}</v-card-title>
                                <v-card-subtitle class="mt-1">{{ item.subtitle }}</v-card-subtitle>
                                <div class="text-h6 text-primary mt-2 font-weight-bold">
                                    {{ item.price }}
                                </div>
                            </v-card-item>

                            <v-card-actions>
                                <v-btn color="primary" variant="tonal" block>ดูแบบแปลน</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-container>

        <v-container class="py-16" id="contact">
            <v-row align="center">
                <v-col cols="12" md="6">
                    <h2 class="text-h3 font-weight-bold text-primary mb-6">สนใจสร้างบ้าน?</h2>
                    <p class="text-h6 text-grey-darken-1 mb-6">
                        ทักหาเราวันนี้เพื่อรับคำปรึกษาและประเมินราคาเบื้องต้น ฟรี! ไม่เสียค่าใช้จ่าย
                    </p>
                    <v-list lines="two">
                        <v-list-item prepend-icon="mdi-phone" title="โทรศัพท์"
                            subtitle="02-123-4567, 089-999-9999"></v-list-item>
                        <v-list-item prepend-icon="mdi-email" title="อีเมล"
                            subtitle="contact@dreamhome.com"></v-list-item>
                        <v-list-item prepend-icon="mdi-map-marker" title="ที่อยู่สำนักงาน"
                            subtitle="123 ถ.สาทร แขวงยานนาวา เขตสาทร กทม."></v-list-item>
                    </v-list>
                </v-col>

                <v-col cols="12" md="6">
                    <v-card elevation="4" class="pa-8 rounded-xl">
                        <h3 class="text-h5 font-weight-bold mb-4">ส่งข้อความถึงเรา</h3>
                        <v-form>
                            <v-text-field label="ชื่อ-นามสกุล" variant="outlined" density="comfortable"></v-text-field>
                            <v-text-field label="เบอร์โทรศัพท์" variant="outlined" density="comfortable"></v-text-field>
                            <v-select label="งบประมาณ"
                                :items="['2-3 ล้านบาท', '3-5 ล้านบาท', '5-10 ล้านบาท', '10 ล้านบาทขึ้นไป']"
                                variant="outlined" density="comfortable"></v-select>
                            <v-textarea label="รายละเอียดเพิ่มเติม" variant="outlined" rows="3"></v-textarea>
                            <v-btn block color="secondary" size="large" class="mt-4">ส่งข้อมูล</v-btn>
                        </v-form>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<<script setup>
definePageMeta({
    layout: 'default',
})

// 6. การตั้งค่า SEO (Search Engine Optimization)
useSeoMeta({
    // ข้อมูลพื้นฐานสำหรับ Google
    title: 'บ้านมั่นคง เอ็นจิเนียริ่ง - รับสร้างบ้าน ครบวงจร งบไม่บานปลาย',
    description: 'รับสร้างบ้าน ออกแบบบ้าน โดยทีมวิศวกรมืออาชีพ ประสบการณ์ 15 ปี ดูแลตั้งแต่ขออนุญาตจนเข้าอยู่ รับประกันโครงสร้าง 10 ปี ในราคายุติธรรม',
    keywords: 'รับสร้างบ้าน, บริษัทสร้างบ้าน, สร้างบ้านราคาถูก, แบบบ้านโมเดิร์น, ผู้รับเหมาสร้างบ้าน, สร้างบ้านนนทบุรี',

    // ข้อมูลสำหรับ Facebook / Line (Open Graph)
    ogTitle: 'บ้านมั่นคง เอ็นจิเนียริ่ง - สร้างบ้านในฝัน งบไม่บานปลาย',
    ogDescription: 'ปรึกษาเรื่องบ้านฟรี! ทีมงานมืออาชีพ การันตีโครงสร้าง 10 ปี มีแบบบ้านให้เลือกกว่า 50 แบบ',
    ogImage: 'https://images.unsplash.com/photo-1600596542815-2a429b08e619?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', // แนะนำให้ใช้รูปปกสวยๆ หรือโลโก้บริษัท
    ogUrl: 'https://www.dreamhome-example.com', // URL เว็บจริง (สมมติไปก่อน)
    ogType: 'website',

    // ข้อมูลสำหรับ Twitter (X)
    twitterCard: 'summary_large_image',
    twitterTitle: 'บ้านมั่นคง เอ็นจิเนียริ่ง รับสร้างบ้าน',
    twitterDescription: 'สร้างบ้านคุณภาพ งบไม่บานปลาย โดยทีมวิศวกร',
    twitterImage: 'https://images.unsplash.com/photo-1600596542815-2a429b08e619?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
})

// 7. เพิ่ม Schema Markup (JSON-LD) สำหรับ Local Business
useHead({
    script: [
        {
            type: 'application/ld+json',
            children: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'GeneralContractor', // ระบุว่าเป็นผู้รับเหมาก่อสร้าง
                'name': 'บ้านมั่นคง เอ็นจิเนียริ่ง',
                'image': 'https://images.unsplash.com/photo-1600596542815-2a429b08e619',
                '@id': 'https://www.dreamhome-example.com',
                'url': 'https://www.dreamhome-example.com',
                'telephone': '02-555-0199',
                'address': {
                    '@type': 'PostalAddress',
                    'streetAddress': '88/9 หมู่บ้านพรีเมียร์ ถ.ราชพฤกษ์',
                    'addressLocality': 'เมือง',
                    'addressRegion': 'นนทบุรี',
                    'postalCode': '11000',
                    'addressCountry': 'TH'
                },
                'geo': {
                    '@type': 'GeoCoordinates',
                    'latitude': 13.862, // พิกัดสมมติ
                    'longitude': 100.451
                },
                'openingHoursSpecification': {
                    '@type': 'OpeningHoursSpecification',
                    'dayOfWeek': [
                        'Monday',
                        'Tuesday',
                        'Wednesday',
                        'Thursday',
                        'Friday',
                        'Saturday'
                    ],
                    'opens': '08:30',
                    'closes': '17:30'
                },
                'priceRange': '฿฿฿' // ระดับราคา
            })
        }
    ]
})

// 1. ข้อมูล Hero Section (จุดขายหลัก)
const heroContent = {
    title: 'สร้างบ้านคุณภาพ...ในงบที่คุณกำหนดได้',
    subtitle: 'ดูแลโดยทีมวิศวกรมืออาชีพ ประสบการณ์กว่า 15 ปี การันตีโครงสร้าง 10 ปี ไม่ทิ้งงาน งบไม่บานปลาย',
    // เรียกใช้รูปจากโฟลเดอร์ public/images โดยตรง (ไม่ต้องมี /public นำหน้า)
    bgImage: '/images/hero.jpg'
}

// 2. ข้อมูลบริการ (Services) - เขียนให้ดูครบวงจร
const services = [
    {
        title: 'รับสร้างบ้านครบวงจร',
        desc: 'บริการ One-Stop Service ตั้งแต่ยื่นขออนุญาต ก่อสร้าง จนถึงส่งมอบงาน พร้อมเข้าอยู่ได้ทันที',
        icon: 'mdi-home-city'
    },
    {
        title: 'ออกแบบสถาปัตยกรรม 3D',
        desc: 'เห็นภาพบ้านจริงก่อนสร้าง ด้วยระบบ 3D Rendering ปรับแก้แบบได้ตามใจ โดยสถาปนิกมืออาชีพ',
        icon: 'mdi-ruler-square-compass'
    },
    {
        title: 'รีโนเวทและต่อเติม',
        desc: 'เปลี่ยนบ้านเก่าให้เหมือนใหม่ หรือต่อเติมครัวและโรงรถ ด้วยโครงสร้างที่ได้มาตรฐาน ไม่ทรุดตัว',
        icon: 'mdi-hammer-wrench'
    }
]

// 3. ข้อมูลสถิติ (Stats) - ตัวเลขต้องดูน่าเชื่อถือ
const stats = [
    { title: 'ปีแห่งประสบการณ์', value: '15+' },
    { title: 'ส่งมอบบ้านแล้ว', value: '120+' },
    { title: 'รับประกันโครงสร้าง (ปี)', value: '10' },
    { title: 'ทีมวิศวกรคุมงาน', value: '100%' }, // ใช้ 100% สื่อถึงทุกไซต์งานมีวิศวกร
]

// 4. ข้อมูลผลงาน (Portfolio) - จำลองแบบบ้านขายดี 3 สไตล์
const portfolios = [
    {
        title: 'Modern Loft Series A',
        subtitle: 'ขนาด 150 ตร.ม. | 3 ห้องนอน 2 ห้องน้ำ',
        price: 'เริ่มต้น 2.59 ล้านบาท',
        image: '/images/loft.jpg', // รูปจากเครื่อง
        tags: ['Best Seller', 'Modern']
    },
    {
        title: 'Nordic Warm Home',
        subtitle: 'ขนาด 185 ตร.ม. | 4 ห้องนอน 3 ห้องน้ำ',
        price: 'เริ่มต้น 3.29 ล้านบาท',
        image: '/images/nordic.jpg', // รูปจากเครื่อง
        tags: ['ยอดนิยม', 'Nordic']
    },
    {
        title: 'Grand Contemporary',
        subtitle: 'ขนาด 280 ตร.ม. | 5 ห้องนอน 4 ห้องน้ำ',
        price: 'เริ่มต้น 5.50 ล้านบาท',
        image: '/images/contemporary.jpg', // รูปจากเครื่อง
        tags: ['Luxury', 'Premium']
    },
    {
        title: 'Minimal Muji Style',
        subtitle: 'ขนาด 120 ตร.ม. | 2 ห้องนอน 2 ห้องน้ำ',
        price: 'เริ่มต้น 1.99 ล้านบาท',
        image: '/images/minimal.jpg', // รูปจากเครื่อง
        tags: ['New', 'Minimal']
    },
    {
        title: 'Tropical Resort House',
        subtitle: 'ขนาด 200 ตร.ม. | 3 ห้องนอน 3 ห้องน้ำ',
        price: 'เริ่มต้น 3.85 ล้านบาท',
        image: '/images/tropical.jpg', // รูปจากเครื่อง
        tags: ['Resort Style']
    },
    {
        title: 'Smart Home Future',
        subtitle: 'ขนาด 220 ตร.ม. | ติดตั้งระบบ Automation ทั้งหลัง',
        price: 'เริ่มต้น 4.20 ล้านบาท',
        // ถ้ายังไม่มีรูปที่ 6 ใช้รูปซ้ำไปก่อนได้ หรือหารูปมาเพิ่มชื่อ smart.jpg
        image: '/images/hero.jpg',
        tags: ['Innovation']
    }
]

// 5. ข้อมูลติดต่อ (Contact)
const contactInfo = {
    address: '88/9 หมู่บ้านพรีเมียร์ ถ.ราชพฤกษ์ ต.บางกร่าง อ.เมือง จ.นนทบุรี 11000',
    phone: '02-555-0199, 089-123-4567',
    email: 'info@munkong-engineering.com',
    lineId: '@munkongbuild',
    facebook: 'facebook.com/munkongbuild'
}
</script>

<style scoped>
/* เพิ่ม Overlay สีดำจางๆ บนภาพ Hero เพื่อให้อ่านตัวหนังสือชัดขึ้น */
.bg-black-opacity {
    background-color: rgba(0, 0, 0, 0.4);
}
</style>