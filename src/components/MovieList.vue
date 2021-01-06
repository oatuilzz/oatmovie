<template>
  <el-container>
    <el-header>Header</el-header>
    <el-main>

      <el-row>
        <el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
          <el-card :body-style="{ padding: '0px' }">
            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                 class="image">
            <div style="padding: 14px;">
              <span>好吃的汉堡</span>
              <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
                <el-button type="text" class="button">操作按钮</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>

    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script>
export default {
  name: "MovieList",
  data() {
    return {
      movieName: this.$route.params.movieName,
      currentDate: new Date()
    }
  },
  mounted() {
    console.log(this.movieName)
    this.loadMovieList()

  },
  methods: {
    loadMovieList(){
      let url = 'https://api.eyunzhu.com/api/vatfs/resource_site_collect/search?kw=' + this.movieName + '&per_page=50&page=1'
      this.$axios.get(url)
          .then(
              response => {
                console.log(response)

              }
          )
    }

  }
}
</script>

<style scoped>
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}
</style>