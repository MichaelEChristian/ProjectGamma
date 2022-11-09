from pydantic import BaseModel, Field

class RestaurantSchema(BaseModel):
    name : str = Field(default=None)
    price_point : str = Field(default=None)
