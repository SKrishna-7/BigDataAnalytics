function scrollToCourseObjectives() {
    const section = document.getElementById('course-objectives');
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

const Units=[
    {
        
        img:'https://imgs.search.brave.com/REG9pG2OjF2EmxwX7cdkOh11zkkYzU7a1iijdSyrb_s/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9wcm9k/LWRpc2NvdmVyeS5l/ZHgtY2RuLm9yZy9j/ZG4tY2dpL2ltYWdl/L3dpZHRoPTM3OCxo/ZWlnaHQ9YXV0byxx/dWFsaXR5PTg1LGZv/cm1hdD13ZWJwL21l/ZGlhL2NvdXJzZS9p/bWFnZS8yMWJlNjIw/My1iMTQwLTQyMmMt/OTIzMy1hMWRjMjc4/ZDcyNjYtZDAwOGI2/NzdmNGMxLmpwZw',
        unit:1,
        unitname:'UNDERSTANDING BIG DATA',
        syllabus:'Introduction to big data – convergence of key trends – unstructured data – industry examples of big data – web analytics – big data applications- big data technologies – introduction to Hadoop -open source technologies – cloud and big data – mobile business intelligence – Crowd sourcing analytics – inter and trans firewall analytics.',
        link:'/'
    },
    {
        img:'https://imgs.search.brave.com/XQ8H_oHAl9DiZUwZ6kgp9VVbBPUJjeLnVbBZ4rpHzrQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZWVrc2Zvcmdl/ZWtzLm9yZy93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMjA0MDUx/MTI0MTgvTm9TUUxE/YXRhYmFzZXMuanBn',
        unit:2,
        unitname:'NOSQL DATA MANAGEMENT',
        syllabus:'Introduction to NoSQL – aggregate data models – key-value and document data models -relationships – graph databases – schemaless databases – materialized views – distribution models – master-slave replication – consistency – Cassandra – Cassandra data model -Cassandra examples – Cassandra clients',
        link:'/'
    },
    {
        img:'https://imgs.search.brave.com/UsycLNekKxASo_zCQXyyTrumbDGNIGfUxR5D3JYmaL8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9kMWpu/eDliYThzNmo5ci5j/bG91ZGZyb250Lm5l/dC9pbWd2ZXIuMjQx/MDE2MTIwOC9pbWcv/YmlnLWRhdGEtaGFk/b29wLXRyYWluaW5n/LWNlcnRpZmljYXRp/b24taW1nLTE3Mjcx/NzM2MzYucG5n',

        unit:3,
        unitname:'Map Reduce Applications',
        syllabus:'Introduction to big data – convergence of key trends – unstructured data – industry examples of big data – web analytics – big data applications- big data technologies – introduction to Hadoop -open source technologies – cloud and big data – mobile business intelligence – Crowd sourcing analytics – inter and trans firewall analytics.',
    },
    {
        img:'https://imgs.search.brave.com/GwcjTa8l2vRfn08RYedMBRfZKv5hKsKK8n_HzmuPO88/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aGFwcGllc3RtaW5k/cy5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMjQvMDcvSGFk/b29wLUFyY2hpdGVj/dHVyZS5qcGc',

        unit:4,
        unitname:'BASICS OF HADOOP',
        syllabus:'Data format – analyzing data with Hadoop – scaling out – Hadoop streaming – Hadoop pipes -design of Hadoop distributed file system (HDFS) – HDFS concepts – Java interface – data flow -Hadoop I/O – data integrity – compression – serialization – Avro – file-based data structures -Cassandra – Hadoop integration.',
    },
    {
        img:'https://imgs.search.brave.com/hYAK--cFwBxKTIWNE_vuCVNM7zK-_RIcRhfxUK4HauA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZWR1Y2JhLmNvbS9h/Y2FkZW15L3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDE5LzA0L0hh/ZG9vcC1Ub29scy5q/cGc',

        unit:5,
        unitname:'HADOOP RELATED TOOLS',
        syllabus:'Hbase – data model and implementations – Hbase clients – Hbase examples – praxis.Pig – Grunt – pig data model – Pig Latin – developing and testing Pig Latin scripts.Hive – data types and file formats – HiveQL data definition – HiveQL data manipulation – HiveQL queries.',
    },

    {
        img:'https://imgs.search.brave.com/f9HC0hqoV_KIj7EK0ztImZ8DVLgA2gHnyQbZMs0GrOM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c29mdHdhcmV0ZXN0/aW5naGVscC5jb20v/d3AtY29udGVudC9x/YS91cGxvYWRzLzIw/MTgvMDYvZGF0YS10/b29scy1maW5hbDEu/cG5n',
        vis:'',
        unit:6,
        unitname:'Big Data Analytics Lab Manual',
        syllabus:'Experment-1,Experment-2,Experment-3,Experment-4,....',
    },
   
    {
        img:'https://imgs.search.brave.com/WAv3cBYU3CrQIaCMcNLjNHzjWKm0_N5LN3NH0VVpxVo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9kcml2/ZWNvbm5lY3QubWUv/d3AtY29udGVudC91/cGxvYWRzLzIwMjMv/MDUvVW5kZXJzdGFu/ZGluZy1TYWxlc2Zv/cmNlLVN0b3JhZ2VA/MngtMS5wbmc',

        vis:'',
        unit:7,
        unitname:'Big Data Analytics Previous Year Question ',
        syllabus:' Big Data Analytics - CCS334 2021 Regulation - Question Paper 2023 Nov Dec',
    },
   
]

const unitsContainer = document.getElementById('units-container');

// Dynamically generate unit cards
Units.forEach((item) => {
    const unitCard = document.createElement('div');
    unitCard.className = 'w-[950px] rounded-xl bg-white flex md:flex-col md:w-[320px] p-2 my-5  items-center border-2 ';

    unitCard.innerHTML = `
      <img src="${item.img}" alt="" class="w-[230px] h-[200px] object-fit rounded-xl 
      md:w-full md:h-[250px]" />
      <div class="px-10 pt-3 md:px-1">
      
        <p class="text-sm font-kanit 
        ${item.vis ===''? "hidden" : "block"}" >Unit-${item.unit}</p>
        <p class="text-xl font-bold text-[#454c8b] ">${item.unitname}</p>
        <p class="py-1 text-justify font-kanit text-[#95a2b6] md:text-[17px] md:font-normal ">${item.syllabus}</p>
        <a href="#unit${item.unit}" class="text-pink-500 font-kanit">Start Reading</a>
      </div>
    `;

    unitsContainer.appendChild(unitCard);
});

let unitnum = 1;

// Hash navigation handler
function navigate() {
    const hash = window.location.hash || '#home';
    const pages = document.querySelectorAll('.content');
    pages.forEach(page => page.style.display = 'none');
    const activePage = document.querySelector(hash);
    if (activePage) activePage.style.display = 'block';

    const unitNumber = hash.replace('#unit', '');
    const pdfFiles = {
        "1": "./Notes/unit1-long.pdf",
        "2": "./Notes/unit2-long.pdf",
        "3": "./Notes/Status.pdf",
        "4": "./Notes/Status.pdf",
        "5": "./Notes/Status.pdf",
        "6": "./Notes/Status.pdf",
        "7": "./Notes/CCS334-Big-Data-Analytics-Nov-Dec-2023-Question-Paper-Download .pdf",
    };

    if (unitNumber) {
        unitnum = unitNumber;
        url=pdfFiles[unitnum]
        console.log(url);
        SetUrl(url)
        
}}

window.addEventListener('hashchange', navigate);
window.addEventListener('load', navigate);

pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.10.377/pdf.worker.min.js';

// let url = './Notes/unit1-long.pdf'
const SetUrl = (e) => {
    url = e;

    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });

    RenderPdf(url, unitnum);

    const targetTab = e === 'short-answer.pdf' ? `short-anwser${unitnum}` : `long-anwser${unitnum}`;
    const tabElement = document.getElementById(targetTab);
    if (tabElement) tabElement.classList.add('active');
};

function RenderPdf(url, pageid) {
    const container = document.getElementById('pdf-pages' + pageid);
    if (!container) {
        console.error(`Error: Element with id "pdf-pages${pageid}" not found.`);
        return;
    }

    container.innerHTML = ''; // Clear previous content

    pdfjsLib.getDocument(url).promise.then(pdf => {
        const totalPages = pdf.numPages;

        const renderPage = (pageNum) => {
            pdf.getPage(pageNum).then(page => {
                const canvas = document.createElement('canvas');
                const context = canvas.getContext('2d');
                const viewport = page.getViewport({ scale: 1 });

                canvas.height = viewport.height;
                canvas.width = viewport.width;

                page.render({
                    canvasContext: context,
                    viewport: viewport
                });

                container.appendChild(canvas);
            });
        };

        for (let pageNum = 1; pageNum <= totalPages; pageNum++) {
            renderPage(pageNum);
        }
    }).catch(error => {
        console.error('Error loading PDF:', error);
    });
}
