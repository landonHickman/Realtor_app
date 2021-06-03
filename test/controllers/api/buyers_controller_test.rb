require "test_helper"

class Api::BuyersControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_buyers_index_url
    assert_response :success
  end

  test "should get show" do
    get api_buyers_show_url
    assert_response :success
  end

  test "should get create" do
    get api_buyers_create_url
    assert_response :success
  end

  test "should get update" do
    get api_buyers_update_url
    assert_response :success
  end

  test "should get destroy" do
    get api_buyers_destroy_url
    assert_response :success
  end
end
