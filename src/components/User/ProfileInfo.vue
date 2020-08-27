<template>
  <div class="profile-info">
    <div class="profile-showcase row">
      <div class="col-sm-12 col-md-3 col-lg-3 col-xl-3 profile-showcase-sidebar">
        <div
          v-if="profile.avatar && profile.avatar.id"
          class="avatar"
          :style="{
            'background-image': `url(${api_url}${profile.avatar.url})`
          }"
        />
        <div v-else class="avatar" />
      </div>
      <div class="col-sm-12 col-md-9 col-lg-9 col-xl-9 profile-showcase-content">
        <div class="title">
          <h2>
            {{ profile.display_name }}
          </h2>
        </div>
        <div class="metas">
          <span class="meta">
            Member since {{ moment(user.created_at).format("MMM Do YY") }}
          </span>
        </div>
      </div>
    </div>
    <form class="profile-info-content uk-form-stacked row no-gutters">
      <div class="title col-12">
        <div class="title-content">
          Your info          
        </div>
        <div class="editor-trigger" @click="edit_mode ? edit_mode = false : edit_mode = true">
          <span>Edit information</span>
          <img src="@/assets/images/icons/edit.svg" alt="">
        </div>
      </div>
      <div class="col-6">
        <div class="uk-margin">
          <label class="uk-form-label">
            Username
          </label>
          <div class="uk-form-controls">
            <input
              type="text"
              class="uk-input"
              v-model="user.username"
              :disabled="!edit_mode"
            >
          </div>
        </div>
        <div class="uk-margin">
          <label class="uk-form-label">
            Display name
          </label>
          <div class="uk-form-controls">
            <input
              type="text"
              class="uk-input"
              v-model="profile.display_name"
              :disabled="!edit_mode"
            >
          </div>
        </div>
        <div class="uk-margin">
          <label class="uk-form-label">
            Email
          </label>
          <div class="uk-form-controls">
            <input
              type="text"
              class="uk-input"
              v-model="user.email"
              :disabled="!edit_mode"
            >
          </div>
        </div>
      </div>
      <div class="col-6">
        <div class="uk-margin">
          <label class="uk-form-label">
            Your description
          </label>
          <div class="uk-form-controls">
            <textarea
              :disabled="!edit_mode"
              class="uk-textarea uk-border-rounded"
              rows="10"
              v-model="profile.description"
            ></textarea>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
<style scoped lang="stylus">
.profile-info
  .profile-showcase
    height 200px
    .profile-showcase-sidebar
      padding 0
      display flex
      flex-direction column
      justify-content center
      align-items center
      .avatar
        width 170px
        height 170px
        background-color #eee
        background-size cover
        background-position center
        border-radius 100%
    .profile-showcase-content
      padding 0
      display flex
      flex-direction column
      justify-content center
      align-items right
  .profile-info-content
    padding 40px
    margin 40px
    box-shadow 0 0 3px #ddd
    border-radius 10px
    .title
      .title-content
        font-size 20pt
      .editor-trigger
        background-color #eee
        display inline-block
        cursor pointer
        float right
        padding 5px 10px
        border-radius 30px
        transition .2s
        span
          max-width 0
          transition max-width 1s
          display inline-block
          vertical-align top
          white-space nowrap
          overflow hidden
        &:hover
          box-shadow 0 0 3px rgba(25, 25, 25, .30)
          transition .2s
          span
            max-width 10rem
</style>
<script>
import moment from 'moment'
export default {
  name: 'ProfileInfoComponent',
  data() {
    return {
      moment,
      edit_mode: false,
      api_url: process.env.VUE_APP_STRAPI_API_URL || "http://localhost:1337",
      data: {
        username: null,
        display_name: null,
        description: null
      }
    }
  },
  computed: {
    user() {
      return this.$store.getters.getUser
    },
    profile() {
      return this.$store.getters.getProfile
    }
  }
}
</script>
