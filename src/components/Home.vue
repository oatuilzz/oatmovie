<template>

  <el-row :gutter="10">
    <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
      <div class="grid-content bg-purple-light">
        <el-input placeholder="搜索电影" prefix-icon="el-icon-search" v-model="movieName"></el-input>
      </div>
    </el-col>
    <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
      <div class="grid-content bg-purple search-movie">
        <el-button type="primary" icon="el-icon-search" v-on:click="searchMovie">搜索</el-button>
      </div>
    </el-col>
    <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
      <div class="grid-content bg-purple-light"></div>
    </el-col>
  </el-row>
</template>

<script>

export default {
  name: "Home",
  data() {
    return {
      movieName: "",
      per_page: 50,
      page: 1
    }

  },
  methods: {
    searchMovie() {
      let movieName = this.movieName
      console.log(this.movieName)
      this.$router.push({name:'movieList',params:{movieName:movieName}})


    }

  }
}
</script>

<style>
.search-movie {
  position: absolute;

}
</style>