from django.urls import path
from .views import SignUpView, SignInView, ResetPasswordView, GoogleView, GoogleRedirectView

urlpatterns = [
    path("register", SignUpView.as_view()),
    path("login", SignInView.as_view()),
    path("logout", SignInView.as_view()),

    # TODO
    path("reset_password", ResetPasswordView.as_view()),
    path("google", GoogleView.as_view()),
    path("google/callback", GoogleRedirectView.as_view()),
]