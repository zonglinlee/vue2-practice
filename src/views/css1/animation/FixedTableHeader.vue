<template>
    <div class="container">
        <section>
            <h1>Fixed Table header</h1>
            <div class="tbl-header">
                <table cellpadding="0" cellspacing="0" border="0">
                    <thead>
                        <tr>
                            <th>Code</th>
                            <th>Company</th>
                            <th>Price</th>
                            <th>Change</th>
                            <th>Change %</th>
                        </tr>
                    </thead>
                </table>
            </div>
            <div class="tbl-content" ref="tblContent">
                <table cellpadding="0" cellspacing="0" border="0">
                    <tbody>
                        <tr v-for="item in 30" :key="item">
                            <td>AAC</td>
                            <td>AUSTRALIAN COMPANY</td>
                            <td>$1.38</td>
                            <td>+2.01</td>
                            <td>-0.36%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'FixedTableHeader',
    mounted() {
        this.computeWith()
        window.addEventListener('resize', this.computeWith)
    },
    methods: {
        computeWith() {
            const tblContent = this.$refs.tblContent
            // console.log(tblContent, this.$refs)
            const table = document.querySelector('table')
            const tblHeader = document.querySelector('.tbl-header')
            const width = tblContent.clientWidth - table.clientWidth
            tblHeader.style.paddingRight = width + 'px'
        },
    },
}
</script>

<style scoped lang="scss">
h1 {
    font-size: 30px;
    color: #fff;
    text-transform: uppercase;
    font-weight: 300;
    text-align: center;
    margin-bottom: 15px;
}
table {
    width: 100%;
    table-layout: fixed;
}
.tbl-header {
    background-color: rgba(255, 255, 255, 0.3);
}
.tbl-content {
    height: 400px;
    overflow-x: auto;
    margin-top: 0;
    border: 1px solid rgba(255, 255, 255, 0.3);
}
th {
    padding: 20px 15px;
    text-align: left;
    font-weight: 500;
    font-size: 12px;
    color: #fff;
    text-transform: uppercase;
}
td {
    padding: 15px;
    text-align: left;
    vertical-align: middle;
    font-weight: 300;
    font-size: 12px;
    color: #fff;
    border-bottom: solid 1px rgba(255, 255, 255, 0.1);
}

/* demo styles */

@import url(https://fonts.googleapis.com/css?family=Roboto:400,500,300,700);
.container {
    background: -webkit-linear-gradient(left, #25c481, #25b7c4);
    background: linear-gradient(to right, #25c481, #25b7c4);
    font-family: 'Roboto', sans-serif;
}
section {
    margin: 50px;
}

/* for custom scrollbar for webkit browser*/

::-webkit-scrollbar {
    width: 6px;
}
::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}
::-webkit-scrollbar-thumb {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}
</style>
