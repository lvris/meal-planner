<template>
  <div h-vh flex flex-col justify-center>
    <HeaderBar title="LOGIN"></HeaderBar>
    <div px-8>
      <NForm ref="formRef" :model="formValue" :rules="rules" size="large" :show-label=false>
        <NFormItem path="username">
          <NInput v-model:value="formValue.username" placeholder="Username">
            <template #prefix>
              <div m-r-2 font-size-5 class="i-solar-user-circle-linear" />
            </template>
          </NInput>
        </NFormItem>
        <NFormItem path="password">
          <NInput v-model:value="formValue.password" type="password" placeholder="Password">
            <template #prefix>
              <div m-r-2 font-size-5 class="i-solar-lock-password-unlocked-linear" />
            </template>
          </NInput>
        </NFormItem>
        <NFormItem mt-4>
          <NButton m-auto w-30 type="tertiary" @click="handleSignUpClick">
            Sign Up
          </NButton>
          <NButton m-auto w-30 type="primary" @click="handleLoginClick">
            Login
          </NButton>
        </NFormItem>
      </NForm>
    </div>
  </div>
</template>

<script setup lang="ts">
import { createUser, loginUser } from '@/apis/user.api';
import HeaderBar from '@/components/Layouts/HeaderBar.vue';
import type { User } from '@/interfaces/user.interface';
import { useUserStore } from '@/stores/userStore';
import { useMessage, type FormInst } from 'naive-ui';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const message = useMessage()
const formRef = ref<FormInst | null>(null)
const formValue = ref({
  username: '',
  password: ''
})
const rules = {
  username: {
    required: true,
    message: 'Please Enter Username',
    trigger: 'blur'
  },
  password: {
    required: true,
    message: 'Please Enter Password',
    trigger: ['input', 'blur']
  }
}

const route = useRoute()
const router = useRouter()
const redirect = route.query.redirect as string | undefined
const doRedirect = (data: User) => {
  useUserStore().updateData(data)

  message.success('Success')

  if (redirect) {
    router.push(redirect)
  } else {
    router.push('/')
  }
}

function handleLoginClick(e: MouseEvent) {
  e.preventDefault()
  formRef.value?.validate((errors) => {
    if (!errors) {
      loginUser(formValue.value).then((res) => {
        doRedirect(res)
      })
    } else {
      message.error('Error')
    }
  })
}

function handleSignUpClick(e: MouseEvent) {
  e.preventDefault()
  formRef.value?.validate((errors) => {
    if (!errors) {
      createUser(formValue.value).then((res) => {
        doRedirect(res)
      })
    } else {
      message.error('Error')
    }
  })
}

</script>
